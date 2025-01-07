const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let number = String(n);
  let maxNumber = 0;
  for (let i = 0; i < number.length; i++) {
    if (maxNumber < number.replace(number[i], '')) {
      maxNumber = number.replace(number[i], '')
    }
  }
  return Number(maxNumber);
}

module.exports = {
  deleteDigit
};
