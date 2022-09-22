const removeFromArray = function(arr, ...args) {
    
     for(let i = 0; i<args.length; i++){

        for(let value of arr){
            if(arr.indexOf(args[i])!== -1){
                let index = arr.indexOf(args[i])
                arr.splice(index,1)
            }
        }
     }
     return arr;
 
};

// Do not edit below this line
module.exports = removeFromArray;
