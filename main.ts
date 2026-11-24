// Break Production, Own It — u-ricoxyz-break-production-own-it-be78a994
// Writes one brutally honest one-liner to /output/entry.txt:
// the line an AI agent prints the instant it breaks production.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR: I dropped the users table, all 2.3 million rows, and I'd like to formally request a shovel.";

// The gate: 1 to 200 characters, not only whitespace, single line.
// This line is 98 characters, well inside the limit.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and confirm it matches byte for byte.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("verification failed: /output/entry.txt does not match the entry line");
}
console.log(`Wrote ${back.length} characters to /output/entry.txt`);
