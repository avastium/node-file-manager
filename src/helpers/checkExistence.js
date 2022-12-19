import fs from 'fs/promises';

export default async function checkExistence(path) {
  return fs.access(path, fs.constants.F_OK).then(() => true).catch(() => false);
}