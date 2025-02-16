const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (const domain of domains) {
    const reversed = domain.split('.').reverse().join(',');
    const parts = reversed.match(/[^,]+/g); 
    let current = '';
    
    for (const part of parts) {
      current += `,${part}`; 
      result[current] = (result[current] || 0) + 1;
    }
  }
    
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      const value = result[key];
      const reversedKey = '.'.concat(key.substring(1).split(',').join('.'));
      result[reversedKey] = value;
      delete result[key];
    }
  }
  
  return result;
}

module.exports = {
  getDNSStats
};
