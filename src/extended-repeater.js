const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let outputString = '';
  const repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  if(options.addition === false ) options.addition = options.addition.toString();;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  for (i = 1; i <= repeatTimes; i++) {
    outputString += `${str}`;

    if (options.addition || options.addition === null) {
      for (b = 1; b <= options.additionRepeatTimes; b++) {
        outputString += `${options.addition}`;
        if (b !== options.additionRepeatTimes) { outputString += `${options.additionSeparator}`; }
        
      }
    }

    if (i !== repeatTimes) { outputString += `${separator}`; }

  }

  console.log(outputString);
  return outputString;
  // remove line with error and write your code here
};
