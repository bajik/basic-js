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
  if (!str) return "";
  let result = "";
  let count = 1;
  let prevCh = str[0];
  for (let i = 1; i < str.length; i++) {
    const currCh = str[i];
    if (currCh === prevCh) {
      count++;
    } else {
      if (count > 1) {
        result += count + prevCh;
      } else {
        result += prevCh;
      }
      count = 1;
      prevCh = currCh;
    }
  }
  if (count > 1) {
    result += count + prevCh;
  } else {
    result += prevCh;
  }
  
  return result;
}

module.exports = {
  encodeLine
};
