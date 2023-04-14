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
  str = new String(str);    
  let repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  let separator = 'separator' in options ? options.separator : '+';
  let addition = 'addition' in options ? new String(options.addition) : '';
  let additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  let additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';

  const addStr = str.concat(additionRepeatTimes > 0 ? Array.from({ length: additionRepeatTimes }, () => addition).join(additionSeparator) : '');
  // console.log(addStr);
  return repeatTimes > 0 ? Array.from({ length: repeatTimes }, () => addStr).join(separator) : '';
  // return 

  // console.log('repeatTimes: ', repeatTimes, 'separator: ', separator, 'addition: ', addition, 'additionRepeatTimes: ', additionRepeatTimes, 'additionSeparator: ', additionSeparator);
}

// repeater('la', { repeatTimes: 3, separator: 's' });
console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }));

module.exports = {
  repeater
};
