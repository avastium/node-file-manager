import fs from 'fs';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function cp(source, destination) {
  source = path.isAbsolute(source) ? source : path.join(process.cwd(), source);
  destination = path.isAbsolute(destination) ? destination : path.join(process.cwd(), destination);
  if (await checkExistence(source) && await checkExistence(destination)) {
    try {
      const rs = fs.createReadStream(source);
      const ws = fs.createWriteStream(path.join(destination, path.basename(source)));
      rs.pipe(ws);
    } catch (e) {
      throw new Error();
    }
  }
  else throw new Error();
}