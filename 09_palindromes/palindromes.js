const palindromes = function (str) {

const regex = /[_]|\W/gi

  let isPal = str.split(regex);
  let joined = isPal.join("").toLowerCase();

  let len = joined.length-1;
  let reverse = "";
  for(len;len>=0;len--){
    reverse = reverse.concat(joined[len])
  }

if(reverse === joined){
  return true}
  else{return false}

 
  


};

// Do not edit below this line
module.exports = palindromes;
