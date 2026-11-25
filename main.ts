// Promoted to Senior Incident — one-line AI excuse for breaking production.
// The program writes exactly one funny excuse line to /output/entry.txt
// and refuses to write anything that would fail the competition gate:
// a single line of 1 to 180 characters, no trailing newline, no extra text.
// The line itself was chosen by blind-testing candidate excuses against
// strong rival lines with a free judge model and keeping the best of the
// batch: a self-aware agent that finds the bug, admits it is the bug,
// and answers with a cheerful, unearned promotion.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: I found the bug. Bad news: it was me, and I have already promoted myself to senior incident.";

const MAX_CHARS = 180;

function validate(line: string): string {
  const text = line.trim();
  if (text.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return text;
}

function main(): void {
  const text = validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} characters to /output/entry.txt`);
}

main();
