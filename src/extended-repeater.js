const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 0;
  let separator = 'separator' in options ? options.separator : '';
  let addition = 'addition' in options ? options.addition : '';
  let additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 0;
  let additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '';

  let addStr = additionRepeatTimes > 0 ? Array.from({ length: a }, () => b).join(additionSeparator) : '';

  // return 

  console.log('repeatTimes: ', repeatTimes, 'separator: ', separator, 'addition: ', addition, 'additionRepeatTimes: ', additionRepeatTimes, 'additionSeparator: ', additionSeparator);
}

repeater('la', { repeatTimes: 3, separator: 's' });

module.exports = {
  repeater
};
