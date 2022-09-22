const sumAll = function(valueA,valueB) {

    if(valueA<0||valueB<0 || isNaN(valueB)|| isNaN(valueA) ||
    typeof valueA==="string" || typeof valueB==="string"){
        return "ERROR";

    }

    
    else if(valueA<=valueB){
    for(let i=2;valueB>=i;i++){
        // console.log(valueA+"+"+i)
        valueA=valueA+i;
        // console.log(valueA);
       result=valueA;


    }}


    else{
    
        for(let i=2;valueA>=i;i++){
            // console.log(valueA+"+"+i)
            valueB=valueB+i;
            // console.log(valueA);
            result=valueB;

    }}




   
    
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
