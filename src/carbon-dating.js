const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' ) return false;
  let x = Number(sampleActivity);
  if(isNaN(x) || x <= 0 || x> 15) return false;  
  let k = 0.693/HALF_LIFE_PERIOD; 
  let t = Math.log(MODERN_ACTIVITY/sampleActivity);
  t = Math.ceil(t/k); 
  return t;
  // remove line with error and write your code here
};