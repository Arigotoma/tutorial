const assert = require('assert');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const getDir = async (dir = process.cwd()) => {
  const pathToRoot = path.join(dir, '../my-app/src');
  const rootDir = await readdir(pathToRoot);

  if (!rootDir) {
    throw new Error(`Could not find folder ${pathToRoot}`);
  }

  return rootDir
}


let dir;
beforeEach(async () => {
  dir = await getDir();
});

test('index.tsx created', async () => {
  assert(dir.indexOf('index.tsx') >= 0);
});
