import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function compress(source, destination) {
  source = path.isAbsolute(source) ? source : path.join(process.cwd(), source);
  destination = path.isAbsolute(destination) ? destination : path.join(process.cwd(), destination);
  if (await checkExistence(source)) {
    const rs = fs.createReadStream(source);
    const ws = fs.createWriteStream(destination);
    rs.pipe(zlib.createBrotliCompress()).pipe(ws);
  }
  else throw new Error();
}