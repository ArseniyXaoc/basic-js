const CustomError = require("../extensions/custom-error");

module.exports = 
function calculateHanoi( disksNumber, turnsSpeed ) {
  const hanoi = {
    turns: 0,
    seconds:0,
  }

  hanoi.turns = (2 ** disksNumber)-1;
  hanoi.seconds = Math.floor(hanoi.turns / (turnsSpeed / 60 / 60)) ;
  console.log(hanoi.turns, hanoi.seconds);
  return hanoi;
  // remove line with error and write your code here
};


//calculateHanoi(9, 4308);
