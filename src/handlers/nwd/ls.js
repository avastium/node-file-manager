import fs from 'fs/promises';

export async function ls() {
  const list = await fs.readdir(process.cwd());
  const folders = [];
  const files = [];
  for (let i in list) {
    try {
      const stat = await fs.lstat(process.cwd() + '/' + list[i]);
      stat.isDirectory() ? folders.push({Name: list[i], Type: 'directory'}) : files.push({Name: list[i], Type: 'file'});
    } catch (e) {}
  }
  return console.table(folders.concat(files));
};