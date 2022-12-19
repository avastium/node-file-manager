import os from 'os';

export async function eol() {
  console.log(JSON.stringify(os.EOL));
}