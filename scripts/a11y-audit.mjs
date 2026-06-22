import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const URL = process.env.AUDIT_URL || 'http://127.0.0.1:4173';
const OUTPUT_DIR = path.resolve('reports');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'a11y-report.json');

function describeElement(el) {
  if (!el) return null;
  return {
    tag: el.tag || '',
    id: el.id || '',
    role: el.role || '',
    text: (el.text || '').trim().slice(0, 100),
    href: el.href || '',
  };
}

async function captureKeyboardOrder(page, count = 20) {
  const sequence = [];
  for (let i = 0; i < count; i += 1) {
    await page.keyboard.press('Tab');
    const active = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const node = el;
      return {
        tag: node.tagName.toLowerCase(),
        id: node.id || '',
        role: node.getAttribute('role') || '',
        text: (node.textContent || '').trim(),
        href: node instanceof HTMLAnchorElement ? node.href : '',
      };
    });
    sequence.push(describeElement(active));
  }
  return sequence;
}

async function runViewportAudit(browser, { name, width, height, reducedMotion }) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion,
  });

  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });

  const title = await page.title();
  const meta = await page.evaluate(() => {
    const pick = (selector) => document.querySelector(selector)?.getAttribute('content') || null;
    return {
      description: pick('meta[name="description"]'),
      ogTitle: pick('meta[property="og:title"]'),
      ogDescription: pick('meta[property="og:description"]'),
      ogImage: pick('meta[property="og:image"]'),
      hasPersonSchema: !!document.querySelector('script[type="application/ld+json"]#person-schema'),
    };
  });

  const axe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  const keyboardSequence = await captureKeyboardOrder(page, 24);

  const responsive = await page.evaluate(() => {
    const htmlOverflow = document.documentElement.scrollWidth > window.innerWidth;
    const bodyOverflow = document.body.scrollWidth > window.innerWidth;
    const wideElements = Array.from(document.querySelectorAll('body *'))
      .map((el) => ({
        node: el.tagName.toLowerCase() + (el.id ? `#${el.id}` : ''),
        width: el.getBoundingClientRect().width,
      }))
      .filter((item) => item.width > window.innerWidth + 1)
      .slice(0, 10);

    return {
      viewportWidth: window.innerWidth,
      htmlOverflow,
      bodyOverflow,
      wideElements,
    };
  });

  const motion = await page.evaluate(() => {
    const mesh = document.querySelector('.hero__mesh svg');
    const style = mesh ? window.getComputedStyle(mesh) : null;
    return {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      meshAnimationName: style?.animationName || null,
      meshAnimationDuration: style?.animationDuration || null,
    };
  });

  const structure = await page.evaluate(() => {
    const headingNodes = Array.from(document.querySelectorAll('h1, h2, h3, h4'));
    const headings = headingNodes.map((h) => ({
      level: h.tagName.toLowerCase(),
      text: (h.textContent || '').trim(),
    }));

    const sections = {
      hero: !!document.querySelector('.hero'),
      coreSkillsTable: !!document.querySelector('.core-skills table'),
      summary: !!document.querySelector('.summary-section'),
      leftPanel: !!document.querySelector('.left-panel'),
      rightPanel: !!document.querySelector('.right-panel'),
      footer: !!document.querySelector('.footer'),
    };

    const tableMeta = (() => {
      const table = document.querySelector('.core-skills__table');
      if (!table) return null;
      const headerCount = table.querySelectorAll('thead th').length;
      const rowCount = table.querySelectorAll('tbody tr').length;
      return { headerCount, rowCount };
    })();

    return { headings, sections, tableMeta };
  });

  let a11ySnapshot = null;
  if (page.accessibility?.snapshot) {
    a11ySnapshot = await page.accessibility.snapshot({ interestingOnly: true });
  } else {
    const cdp = await context.newCDPSession(page);
    const axTree = await cdp.send('Accessibility.getFullAXTree');
    a11ySnapshot = {
      source: 'cdp-full-ax-tree',
      nodeCount: Array.isArray(axTree.nodes) ? axTree.nodes.length : 0,
      sampleNodes: Array.isArray(axTree.nodes)
        ? axTree.nodes
            .filter((node) => node.role?.value)
            .slice(0, 30)
            .map((node) => ({
              role: node.role?.value || '',
              name: node.name?.value || '',
            }))
        : [],
    };
  }

  await context.close();

  return {
    name,
    viewport: { width, height, reducedMotion },
    title,
    meta,
    axe: {
      violations: axe.violations,
      passesCount: axe.passes.length,
      violationsCount: axe.violations.length,
    },
    keyboardSequence,
    responsive,
    motion,
    structure,
    accessibilityTree: a11ySnapshot,
  };
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  const desktop = await runViewportAudit(browser, {
    name: 'desktop-default-motion',
    width: 1366,
    height: 900,
    reducedMotion: 'no-preference',
  });

  const mobile = await runViewportAudit(browser, {
    name: 'mobile-360-reduced-motion',
    width: 360,
    height: 740,
    reducedMotion: 'reduce',
  });

  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    url: URL,
    audits: [desktop, mobile],
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf8');

  console.log(`Accessibility report written to ${OUTPUT_FILE}`);
  console.log(`Desktop violations: ${desktop.axe.violationsCount}`);
  console.log(`Mobile violations: ${mobile.axe.violationsCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
