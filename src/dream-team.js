const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Object.prototype.toString.call(members) !== '[object Array]') return false;
  let teamName = members.map(item => {
    if(typeof item === 'string')  {
      item = item.replace(/\s+/g, '');
      item = item.toUpperCase();
      return item.slice(0, 1);
  }

  })
  teamName.sort();
  let big = teamName.join('');  
  console.log(big);
  return big;
  // remove line with error and write your code here
};

