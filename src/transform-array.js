const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr == undefined || typeof(arr) != 'object' || !arr.hasOwnProperty('length')) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  let res = new Array();
  let isDiscardNext = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue; 
    if (typeof(arr[i]) === "string") {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          isDiscardNext = true;
          break;      
        case '--discard-prev':
          if (!isDiscardNext) {
            res.pop(); 
          }
          break;      
        case '--double-next':
          if ((i+1) < arr.length) {
            res.push(arr[i+1]); 
          }
          break;      
        case '--double-prev':
          if (res.length > 0 && !isDiscardNext) {
            res.push(res[res.length - 1]);
          }
          isDiscardNext = false;       
          break;      
        default:
          res.push(arr[i]);
          break;
      }      
    } else {
      res.push(arr[i]);
      isDiscardNext = false;
    }
  }
  return res;
}

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
