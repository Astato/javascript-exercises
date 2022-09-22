const leapYears = function(isleap) {

   
        if(isleap%400===0 && isleap%100===0 || isleap%4===0 && isleap%100!==0){
        return true;}

        else if(isleap%4===0 && isleap%100===0){
            return false;

        }

        else{return false;}

};


// Do not edit below this line
module.exports = leapYears;
