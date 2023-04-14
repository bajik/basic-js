const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    console.log(msg, key);    
    let result = '';
    for (let i = 0, j = 0; i < msg.length; i++) {
      if (/[A-Z]/.test(msg[i])) {
        const msgCharCode = msg[i].charCodeAt(0);
        const keyCharCode = key[j % key.length].charCodeAt(0);
        const shift = keyCharCode - 65;
        let resultCharCode = ((msgCharCode + shift - 65) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        j++;
      } else {
        result += msg[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    msg = msg.toUpperCase();
    key = key.toUpperCase();    
    let result = '';
    for (let i = 0, j = 0; i < msg.length; i++) {
      if (/[A-Z]/.test(msg[i])) {
        const msgCharCode = msg[i].charCodeAt(0);
        const keyCharCode = key[j % key.length].charCodeAt(0);
        const shift = keyCharCode - 65;

        let resultCharCode = ((msgCharCode - shift - 65 + 26) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        j++;
      } else {
        result += msg[i];
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
