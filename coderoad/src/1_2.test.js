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

test('Ожидание инициализации приложения', async () => {
  const rootDir = await getDir('..');
  assert(rootDir.indexOf('my-app') >= 0);
});

test('Ожидание окончания инициализации приложения', async () => {
  const appDir = await getDir('../my-app/src');
  assert(appDir.indexOf('index.css') >= 0);
});
