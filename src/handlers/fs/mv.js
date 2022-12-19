import fs from 'fs';
import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function mv(source, destination) {
  source = path.isAbsolute(source) ? source : path.join(process.cwd(), source);
  destination = path.isAbsolute(destination) ? destination : path.join(process.cwd(), destination);
  if (await checkExistence(source) && await checkExistence(destination)) {
    const rs = fs.createReadStream(source);
    const ws = fs.createWriteStream(path.join(destination, path.basename(source)));
    rs.pipe(ws);
    rs.close();
    rs.on('close', async () => {
      await fs.promises.unlink(source);
    });
  }
  else throw new Error();
}