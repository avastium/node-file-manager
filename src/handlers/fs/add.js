import fs from 'fs/promises';
import path from 'path';

export async function add(filename) {
  await fs.writeFile(path.join(process.cwd(), filename), '');
}