const fibonacci = function(num) {

        let fibo = [1,1]
              
        for(let y= 1; y<=num-1;y++){
          let x = fibo[y]+fibo[y-1];
          fibo.push(x)
        }

        if(num >0){
          return fibo[num-1] }
        else{
            return "OOPS"
        }


};

// Do not edit below this line
module.exports = fibonacci;
