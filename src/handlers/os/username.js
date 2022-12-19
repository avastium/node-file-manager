import os from 'os';

export async function username() {
  console.log(os.userInfo().username);
}