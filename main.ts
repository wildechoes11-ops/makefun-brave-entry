import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = [
  'At the footbridge, the dog sets one paw on the first plank. It holds.',
  'Below, the creek slides past, carrying nothing heavier than a leaf.',
  'The dog sets down another paw.',
].join(' ');

const outputDir = process.env.ENTRY_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entry, 'utf8');
