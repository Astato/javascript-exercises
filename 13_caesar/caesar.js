const caesar = function(str, num) {
    const filter = /[^!.,¿¡?\s]/
  
    
    let result = "";
    
   
    for(let value of str){
    
      if(!filter.test(value)){ ///// if value(char in index) is === " " or symbols, just concat it to result
        //console.log(value)
        result += value;
      }
      else{
        let charCode = value.codePointAt() ////converts letters to code in UTF-16

        if(num >0){
        
        for(let code=num;code>0;code--){
         charCode  +=1; 
          if(charCode>90 && charCode <97){charCode = 65; continue;} ///if the code is higher than 90 it starts adding from 65, to start over from A-Z, A being 65 in Charcode and Z = 90
            else if(charCode>122){charCode=97;continue;}
        }}
        else if(num <0){
          for(let code=num;code<0;code++){
            charCode  -=1; 
            if(charCode<65){charCode = 90; continue;} 
              else if(charCode<97 && charCode >90){charCode=122;continue;}
          }

        }
        
        let letter = String.fromCharCode(charCode); ///converts code to character
        result +=letter;  ////add letter to result
      }
    
    }console.log(result)
    return result;
    
    
   
};

// Do not edit below this line
module.exports = caesar;
