const repeatString = function(word, times) {

   
    if(times ===-1){
        try{
            repeatString("hey",-1)
    
            }
        catch(e){
            RangeError(e)
        }
        finally{
            return"ERROR";
        };
    
    }
    rep = word.repeat(times);
    console.log(rep);

    return rep;
    
      
}; 


// Do not edit below this line
module.exports = repeatString;
