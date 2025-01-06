const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  if (str.length > 0) {
    let count = 1;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] == str[i + 1]) {
        count++;
      } else {
        count == 1 ? newStr += str[i] : newStr += String(count) + str[i];
        count = 1;
      }
    }
    count == 1 ? newStr += str[str.length - 1] : newStr += String(count) + str[str.length - 1];
  }
  return newStr;
}

module.exports = {
  encodeLine
};
