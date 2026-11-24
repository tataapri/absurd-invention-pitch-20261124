import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The Squeak-Seeker: a TV remote that squeaks like a stepped-on dog toy whenever anyone sits on it, so it can never hide in the sofa cushions again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
