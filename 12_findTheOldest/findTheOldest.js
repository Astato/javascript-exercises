const findTheOldest = function(arr) {

    let oldest = []

    const REDUCE = arr.reduce((person, age)=> {
   
      if(age.yearOfDeath === undefined){
          age.yearOfDeath =  2022;
      }
        let compare = age.yearOfDeath - age.yearOfBirth;
        oldest.push(compare)    
    }, {})
    
    const age = Math.max(...oldest)
    return arr[oldest.indexOf(age)]


};

// Do not edit below this line
module.exports = findTheOldest;
