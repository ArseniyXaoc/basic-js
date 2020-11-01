const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(option = true) {
    this.option = option;
  }
  encrypt(message, key) {

    if (typeof message === 'undefined' || typeof key === 'undefined' || message === null || key === null){
      throw Error;
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let res = ''; // выходной результат
    let alphaveit = 'abcdefghijklmnopqrstuvwxyz' // алфавит

    let msgLength = message.length;
    let keyLength = key.length;

    if(msgLength  < keyLength) key = key.slice(0, msgLength);
    if(msgLength > keyLength) {
      let diffLen = Math.ceil(msgLength / keyLength);
      key = key.repeat(diffLen).slice(0, msgLength);
    }

    let keyArr = key.split("");
    let msgArr = message.split("");

    msgArr.forEach(element => {
      let msgIn = alphaveit.indexOf(element);
      if (msgIn < 0) {
        res += element;
    } else {
        res += alphaveit.charAt((msgIn + alphaveit.indexOf(keyArr.shift())) % alphaveit.length);
    }
    });

    res = res.toUpperCase();

    console.log(res);
    return (this.option) ? res : res.split('').reverse().join(''); 
    // remove line with error and write your code here
  }
  
  decrypt(message, key) {

    if (typeof message === 'undefined' || typeof key === 'undefined' || message === null || key === null){
      throw Error;
    }

    message = message.toLowerCase();
    key = key.toLowerCase();
  
    let res = ''; // выходной результат
    let alphaveit = 'abcdefghijklmnopqrstuvwxyz' // алфавит
  
    let msgLength = message.length;
    let keyLength = key.length;
  
    if(msgLength  < keyLength) key = key.slice(0, msgLength);
    if(msgLength > keyLength) {
      let diffLen = Math.ceil(msgLength / keyLength);
      key = key.repeat(diffLen).slice(0, msgLength);
    }
  
    let keyArr = key.split("");
    let msgArr = message.split("");
  
    msgArr.forEach(element => {
      let msgIn = alphaveit.indexOf(element);
      if (msgIn < 0) {
        res += element;
    } else {
        res += alphaveit.charAt((msgIn + alphaveit.length - alphaveit.indexOf(keyArr.shift())) % alphaveit.length);
    }
    });
  
    res = res.toUpperCase();
  
    console.log(res);

    return (this.option) ? res : res.split('').reverse().join(''); 
  
    // remove line with error and write your code here
  }
}

//  const directMachine = new VigenereCipheringMachine();
//  directMachine.encrypt('attack at dawn!', 'alphonse');

module.exports = VigenereCipheringMachine;