import fs from 'fs';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function rm(pathToFile) {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.join(process.cwd(), pathToFile);
  if (await checkExistence(pathToFile)) await fs.promises.unlink(pathToFile);
  else throw new Error();
}