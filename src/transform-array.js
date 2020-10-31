const CustomError = require("../extensions/custom-error");

module.exports = 
function transform(arr) {
  if(arr === undefined) throw  new Error('THROWN');
  let outArr = [];
  for (let i = 0; i < arr.length; i++ ){
    
    if(arr[i] === '--discard-next'){
      i = i+1;
    }
    else if(arr[i] === '--discard-prev'){
      if(arr[i-2] === '--discard-next'){}
       else outArr.pop();
    }
     else if(arr[i] === '--double-next'){
      if(arr[i+1] !== undefined)
      outArr.push(arr[i+1]);
    }
    else if(arr[i] === '--double-prev'){
      if(arr[i-2] === '--discard-next'){}      
      else if(i != 0)
      outArr.push(arr[i-1]);
    }
    else {
      outArr.push(arr[i]);
    }
  }
  return outArr;
  // remove line with error and write your code here
};

//transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
//console.log(transform([NaN,'--double-prev', true, 22, 'ABC', 'ABC']));