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
function deleteDigit(num) {
  let maxNum = 0;
  let newDigit = 0;
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (i != 0 && i != numStr.length - 1) {
      newDigit = numStr.substr(0, i) + numStr.substr(i+1);
    } else {
      if (i == 0) {
        newDigit = numStr.substr(i+1);
      } else {
        newDigit = numStr.substr(0, i);
      }
    }

    if (newDigit > maxNum) {
      maxNum = newDigit;
    }
  }
  return parseInt(maxNum);
}



module.exports = {
  deleteDigit
};
