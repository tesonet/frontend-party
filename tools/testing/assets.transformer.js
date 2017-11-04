//---------------------------------------------------------------------
// Jest handling static assets like imported images while running tests.
// https://github.com/facebook/jest/issues/2663#issuecomment-317109798
//---------------------------------------------------------------------
import path from 'path';

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
