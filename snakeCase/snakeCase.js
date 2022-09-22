const snakeCase = function(str) {

    const regex = /\s|\W/g
    const upper = /[A-Z]/
    const split = str.split(regex)

    const rex = /\w*\w/gi
  
 
    if(split.length <= 1){
        str = ""
        for(let value of split[0]){
            if (value.match(upper))[
                str += "_"
                ]    
            str +=value
            
        }
      
        return str.toLowerCase();
        
    }else{
      
        const result = str.match(rex).join("_").toLowerCase()
        return result
        
        
        
}
    
    
  




};

// Do not edit below this line
module.exports = snakeCase;
