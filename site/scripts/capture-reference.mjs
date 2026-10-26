// Captures full-page screenshots of the design reference for study.
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { chromium } from 'playwright-core'

const OUT_DIR = join(process.cwd(), 'verification')

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
 * Captures the reference site at desktop and phone widths.
 */
async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const browser = await chromium.launch({ executablePath: findChromium() })
  const page = await browser.newPage()
  for (const viewport of [
    { name: 'ref-desktop-1280x800', width: 1280, height: 800 },
    { name: 'ref-phone-390x844', width: 390, height: 844 },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('https://www.umidjon.site/en', { waitUntil: 'networkidle', timeout: 60000 })
    await page.screenshot({ path: join(OUT_DIR, `${viewport.name}.png`), fullPage: true })
  }
  await browser.close()
  console.log('Reference screenshots written')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
