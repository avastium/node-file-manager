import os from 'os';

export async function cpus() {
  console.log(os.cpus());
}