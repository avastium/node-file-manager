import fs from 'fs';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function cat(pathToFile) {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.join(process.cwd(), pathToFile);
  if (await checkExistence(pathToFile)) fs.createReadStream(pathToFile).pipe(process.stdout);
  else throw new Error();
}