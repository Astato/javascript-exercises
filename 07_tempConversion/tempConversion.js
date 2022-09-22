const ftoc = function(n) {

  n = (n-32)*5/9;
  n = Math.round(n*10)/10;
  console.log(n);
  return n;


};

const ctof = function(n) {

  n = (n*9/5)+32;
  n=Math.round(n*10)/10;
  return n;


};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
