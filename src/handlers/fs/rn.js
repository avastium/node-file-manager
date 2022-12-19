import fs from 'fs/promises';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function rn(pathToFile, filename) {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.join(process.cwd(), pathToFile);
  if (await checkExistence(pathToFile)) await fs.rename(pathToFile, filename);
  else throw new Error();
}