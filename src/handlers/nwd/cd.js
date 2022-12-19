import path from 'path';
import checkExistence from '../../helpers/checkExistence.js';

export async function cd(newPath) {
  if (path.isAbsolute(newPath)) {
    if (await checkExistence(newPath)) return newPath;
    else throw new Error();
  }
  else {
    const pathJoined = path.join(process.cwd(), newPath);
    if (await checkExistence(pathJoined)) return process.chdir(pathJoined);
    else throw new Error();
  }
}