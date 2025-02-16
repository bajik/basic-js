const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position - 1 < 0 || position > this.chains.length || typeof(position) != 'number') {
      this.chains = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chains.join('~~');
    this.chains = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
