function pigLatin(str) {

const vowel = /[aeiou]/ 
const split = str.split(" ");
let result = []


  for(let words of split){

    if(words.match("qu")){
      let quIndex = words.indexOf("qu");
      const end = words.slice(quIndex,quIndex+2)+"ay";
      const start = words.slice(quIndex+2)

        if(quIndex !== 0){
        const slicefirst = words.slice(0,quIndex)
        result.push(start+slicefirst+end)
        if(result.length === split.length){break}
        }

      result.push(start+end);
      if(result.length === split.length){break}

    }

    else if(words[0].match(vowel)){

      result.push(words+"ay")
      if(result.length === split.length){break}
    
    }

    else{   

      for(let letter in words){

        if(vowel.test(words[letter])){
          const startVowel = words.slice(letter)
          const endVowel = words.slice(0,letter)
          result.push(startVowel+endVowel+"ay")
          if(result.length === split.length){break}
/* for some reason i have yet to know it kept iiterating through 
 the same word multiple times, i.e BANANA  gives 3 diferent
 results although the word count in "split" is  0 (1 word)  */        
       }
      }

    }

    
  }///end for


result = result.join(" ")
console.log(result)

return result;
      
};
  
// Do not edit below this line
module.exports = pigLatin;
