// Captures full-page screenshots of the built site at phone and desktop
// widths so interface changes can be reviewed before shipping. Run
// `npm run build` first, then `npm run verify:screenshots`.
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { chromium } from 'playwright-core'

/** Port the preview server is started on. */
const PORT = 4173

/** Directory screenshots are written to. */
const OUT_DIR = join(process.cwd(), 'verification')

/** Viewports captured: a real phone width and a desktop width. */
const VIEWPORTS = [
  { name: 'phone-390x844', width: 390, height: 844 },
  { name: 'desktop-1280x800', width: 1280, height: 800 },
]

/**
 * Finds a cached Playwright chromium executable without downloading one.
 * @returns The path to the chromium binary.
 * @throws If no cached chromium build exists.
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
  throw new Error('No cached chromium found in ~/.cache/ms-playwright')
}

/**
 * Waits until the preview server answers requests.
 * @param url - The URL to poll.
 * @param timeoutMs - How long to wait before giving up.
 * @throws If the server does not answer in time.
 */
async function waitForServer(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      await fetch(url)
      return
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 300))
    }
  }
  throw new Error(`Preview server did not start at ${url}`)
}

/**
 * Serves dist/ with vite preview, captures both viewports full-page,
 * then tears the server down.
 */
async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    stdio: 'ignore',
  })
  try {
    await waitForServer(`http://localhost:${PORT}`)
    const browser = await chromium.launch({ executablePath: findChromium() })
    const page = await browser.newPage()
    for (const path of ['/', '/resume/']) {
      for (const viewport of VIEWPORTS) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height })
        await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle' })
        await page.screenshot({
          path: join(OUT_DIR, `${path === '/' ? 'home' : 'resume'}-${viewport.name}.png`),
          fullPage: true,
        })
      }
    }
    await browser.close()
    console.log(`Screenshots written to ${OUT_DIR}`)
  } finally {
    preview.kill()
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
