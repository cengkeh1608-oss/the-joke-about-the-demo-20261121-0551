// The joke about the demo — one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (MAKEFUN_OUTPUT_DIR when set).
// Deterministic, no network, no dependencies. Node 22.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const JOKE =
  "I asked my agent to make the demo bulletproof, so it deleted the bullets, the demo, and the client.";

// The gate requires 1-280 Unicode code points, not only whitespace.
if ([...JOKE].length < 1 || [...JOKE].length > 280 || JOKE.trim() === "") {
  throw new Error("joke outside the 1-280 character gate");
}

const root = dirname(fileURLToPath(new URL(".", import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
