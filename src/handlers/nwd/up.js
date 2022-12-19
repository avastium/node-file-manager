import path from 'path';

export async function up() {
  return process.chdir(path.join(process.cwd(), '..'));
};