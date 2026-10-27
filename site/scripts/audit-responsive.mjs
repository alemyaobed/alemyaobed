// Intrusive responsive audit: loads each page at many widths and reports
// horizontal overflow, elements wider than the viewport (outside
// intentional horizontal scrollers), and undersized nav tap targets.
import { spawn } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { chromium } from 'playwright-core'

const PORT = 4174

const WIDTHS = [320, 360, 390, 414, 480, 640, 768, 1024, 1280, 1440, 1536]

/**
 * Finds a cached Playwright chromium executable.
 * @returns The path to the chromium binary.
 */
function findChromium() {
  const cache = join(homedir(), '.cache', 'ms-playwright')
  const dirs = readdirSync(cache)
    .filter((name) => /^chromium(_headless_shell)?-\d+$/.test(name))
    .sort()
    .reverse()
  for (const dir of dirs) {
    const shell = join(cache, dir, 'chrome-linux', 'headless_shell')
    const chrome = join(cache, dir, 'chrome-linux', 'chrome')
    if (existsSync(shell)) return shell
    if (existsSync(chrome)) return chrome
  }
  throw new Error('No cached chromium found')
}

/**
 * Collects overflow and layout data for the current page.
 * @returns Page diagnostics from inside the browser.
 */
function collectDiagnostics() {
  const clientWidth = document.documentElement.clientWidth
  const overflows = []
  document.querySelectorAll('body *').forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || (rect.right <= clientWidth + 1 && rect.left >= -1)) {
      return
    }
    let parent = el.parentElement
    let scrollable = false
    while (parent && parent !== document.body) {
      const style = window.getComputedStyle(parent)
      if (/(auto|scroll)/.test(style.overflowX)) {
        scrollable = true
        break
      }
      parent = parent.parentElement
    }
    if (!scrollable) {
      overflows.push({
        tag: el.tagName,
        cls: String(el.className).slice(0, 70),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        text: (el.textContent || '').trim().slice(0, 30),
      })
    }
  })
  const smallTaps = [...document.querySelectorAll('nav a')].map((a) => ({
    text: a.textContent.trim().slice(0, 12),
    height: Math.round(a.getBoundingClientRect().height),
  }))
  return {
    clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflows: overflows.slice(0, 6),
    smallTaps: smallTaps.filter((t) => t.height > 0 && t.height < 40),
  }
}

/**
 * Serves the build, audits every width on both pages, tears down.
 */
async function main() {
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    stdio: 'ignore',
  })
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const browser = await chromium.launch({ executablePath: findChromium() })
    const page = await browser.newPage()
    let failures = 0
    for (const path of ['/', '/resume']) {
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 })
        await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle' })
        const report = await page.evaluate(collectDiagnostics)
        const pageOverflow = report.scrollWidth - report.clientWidth
        const bad = pageOverflow > 1 || report.overflows.length > 0 || report.smallTaps.length > 0
        if (bad) {
          failures += 1
          console.log(`FAIL ${path} @${width}: pageOverflow=${pageOverflow}px`)
          for (const o of report.overflows) {
            console.log(`  overflow <${o.tag}> ${o.cls} l=${o.left} r=${o.right} "${o.text}"`)
          }
          for (const t of report.smallTaps) {
            console.log(`  small tap "${t.text}" h=${t.height}`)
          }
        } else {
          console.log(`ok   ${path} @${width}`)
        }
      }
    }
    await browser.close()
    console.log(failures === 0 ? 'AUDIT CLEAN' : `AUDIT FOUND ${failures} FAILING WIDTHS`)
    process.exitCode = failures === 0 ? 0 : 1
  } finally {
    preview.kill()
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
