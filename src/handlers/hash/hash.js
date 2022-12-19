import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import checkExistence from '../../helpers/checkExistence.js';

export async function hash(pathToFile) {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.join(process.cwd(), pathToFile);
  if (await checkExistence(pathToFile)) {
    const fileBuffer = await fs.readFile(pathToFile);
    const hash = crypto.createHash('sha256');
    hash.update(fileBuffer);
    console.log(hash.digest('hex'));
  }
  else throw new Error();
}