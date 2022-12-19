import os from 'os';

export async function homedir() {
  console.log(os.homedir());
}