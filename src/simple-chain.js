const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  separator: '~~',
  getLength(chain) {
   return chain.split(this.separator).length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain += (this.chain !== '') ? `${this.separator}( ${value} )` : `( ${value} )`;
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    let chArr = this.chain.split(this.separator);
    let positionCheck = position-1;
    if (typeof chArr[positionCheck] === 'undefined' || typeof positionCheck !== 'number') {
      this.chain = '';
      throw Error;
    }
    chArr.splice(positionCheck, 1);
    this.chain = chArr.join(this.separator);
    return this;    
    // remove line with error and write your code here
  },
  reverseChain() {
    let chArr = this.chain.split(this.separator);
    let reverse = chArr.reverse();
    this.chain = reverse.join(this.separator);
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
   let chReturn = this.chain;
   this.chain = '';
   return chReturn;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
