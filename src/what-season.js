const CustomError = require("../extensions/custom-error");

module.exports = 
function getSeason(date) {


  

  if(date == undefined){
    return 'Unable to determine the time of year!';
  }
  
  if({}.toString.call(date) !== '[object Date]'){
    throw Error;
  }

  let seasonNum = date.getMonth();
  if( seasonNum >= 11 || seasonNum <= 1 ){
    return 'winter';
  };
  if( seasonNum >= 2  && seasonNum <= 4 ){
    return 'spring';
  };
  if( seasonNum >= 5  && seasonNum <= 7 ){
    return 'summer';
  };
  if( seasonNum >= 8  && seasonNum <= 10 ){
    return 'autumn';
  };
  

  //console.log(seasonNum);
  // remove line with error and write your code here
};


// winter = new Date(2019, 11, 22, 23, 45, 11, 500),
// spring = new Date(2018, 4, 17, 11, 27, 4, 321),
// summer = new Date(2017, 6, 11, 23, 45, 11, 500),
// autumn = new Date(1994, 8, 26, 3, 0, 11, 500);

//console.log(getSeason());