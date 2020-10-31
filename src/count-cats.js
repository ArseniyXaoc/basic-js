const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
  let counter = 0;
  if (cat.length === 0) return 0;
  let fork = cat.reduce((a, b) => {
    return a.concat(b);
  });
  fork.forEach(item => {
    if (item === '^^') {
      counter++;
    }
  })
  return counter;
  // remove line with error and write your code here
};
