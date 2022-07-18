/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) {

    // store empty string result
    var result = '';
    // define charCode and set it to 0
    var charCode = 0;

    // for loop that works through str
    for(let i = 0; i < str.length; i++){

        // if str is between 65 - 122 (A - Z in charCode)
        if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 122){
            // charCode equals charCode at i minus 13(the amount that Caears Cipher is off)
            charCode = (str[i].charCodeAt() - 13);
        }
        // else character is not A - Z in charcode abd set charCOde to str[i]
        else{
            charCode = str[i].charCodeAt();
        }
        // If charcode is less than 65 and is not a letter
        if(str[i].match(/[a-z]/i) && charCode < 65){
        // charCode equalls 90 (Letter Z) minus 65 (Letter A) minus charCode - 1
        charCode = 90 - (65 - charCode - 1);
        }
        // adds String.fromCharCode(charCode) to result
        result += String.fromCharCode(charCode);
    }
    // retrun result
   return result;
  }
  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");