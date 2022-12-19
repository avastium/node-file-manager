import os from 'os';

export async function architecture() {
  console.log(os.arch());
}