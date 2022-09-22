const reverseString = function(reverse) {
    
    let len = reverse.length;
    ver = "";


    for(len-1;len>=0;len--){
        revword = ver.concat(reverse.charAt(len));
        ver = revword;
      
    }
    console.log(revword);
    return revword;
    };


 


// Do not edit below this line
module.exports = reverseString;
