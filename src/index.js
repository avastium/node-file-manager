import readline from 'readline/promises';
import os from 'os';
import * as handlers from './handlers/index.js';

const index = process.argv.findIndex((item) => item.startsWith('--username'));
const username = index === -1 ? '' : process.argv[index].slice(11);
process.chdir(os.homedir());
console.log(`Welcome to the File Manager, ${username}!\n\nYou are currently in ${process.cwd()}`);

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.on('line', async (line) => {
  if (line === '.exit') process.exit(0);
  line = line.split(' ');

  if (line[0] === 'up') await handlers.up().catch(() => console.log('Operation failed'));
  if (line[0] === 'cd' && line[1]) await handlers.cd(line[1])//.catch(() => console.log('Operation failed'));
  if (line[0] === 'ls') await handlers.ls().catch(() => console.log('Operation failed'));

  if (line[0] === 'cat' && line[1]) await handlers.cat(line[1]).catch(() => console.log('Operation failed'));
  if (line[0] === 'add' && line[1]) await handlers.add(line[1]).catch(() => console.log('Operation failed'));
  if (line[0] === 'rn' && line[1] && line[2]) await handlers.rn(line[1], line[2]).catch(() => console.log('Operation failed'));
  if (line[0] === 'cp' && line[1] && line[2]) await handlers.cp(line[1], line[2]).catch(() => console.log('Operation failed'));
  if (line[0] === 'mv' && line[1] && line[2]) await handlers.mv(line[1], line[2]).catch(() => console.log('Operation failed'));
  if (line[0] === 'rm' && line[1]) await handlers.rm(line[1]).catch(() => console.log('Operation failed'));

  if (line[0] === 'os' && line[1] && line[1].toUpperCase() === '--EOL') await handlers.eol().catch(() => console.log('Operation failed'));
  if (line[0] === 'os' && line[1] && line[1].toLowerCase() === '--cpus') await handlers.cpus().catch(() => console.log('Operation failed'));
  if (line[0] === 'os' && line[1] && line[1].toLowerCase() === '--homedir') await handlers.homedir().catch(() => console.log('Operation failed'));
  if (line[0] === 'os' && line[1] && line[1].toLowerCase() === '--username') await handlers.username().catch(() => console.log('Operation failed'));
  if (line[0] === 'os' && line[1] && line[1].toLowerCase() === '--architecture') await handlers.architecture().catch(() => console.log('Operation failed'));

  if (line[0] === 'hash' && line[1]) await handlers.hash(line[1]).catch(() => console.log('Operation failed'));

  if (line[0] === 'compress' && line[1] && line[2]) await handlers.compress(line[1], line[2]).catch(() => console.log('Operation failed'));
  if (line[0] === 'decompress' && line[1] && line[2]) await handlers.decompress(line[1], line[2]).catch(() => console.log('Operation failed'));
  console.log(`You are currently in ${process.cwd()}`);
});

process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));