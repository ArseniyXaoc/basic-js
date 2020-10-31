const CustomError = require("../extensions/custom-error");

module.exports = 
class DepthCalculator {
  
  calculateDepth(arr) {
    let counter = 1;
    
    arr.forEach((element) => {      
      if(Array.isArray(element)){
        counter = Math.max(counter, 1 + this.calculateDepth(element));    
      }
        
    });
    return counter;     
 }
};

