const assert = require('assert');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const getDir = async (dir = process.cwd()) => {
  const rootDir = await readdir(dir);

  if (!rootDir) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return rootDir
}

test('Запуск приложения', async () => {
  const rootDir = await getDir('../my-app/src');
  assert(rootDir.indexOf('react-app-env.d.ts') >= 0);
});
