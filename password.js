

const password = '1111111As';

const minLengthOfChars = 10;
const maxLengthOfChars = 14;
const includesUpperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const includesLowererChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const includesNum = ['1','2','3','4','5','6','7','8','9'];

const passwordSplit = password.split('');
console.log(passwordSplit);

// 1st Additonal check: Max PW length (in addition to min length).
const pwMinAndMaxLength = () => {
    if (passwordSplit.length >= minLengthOfChars && passwordSplit.length <= maxLengthOfChars ){
        console.log('Password meets the length requirements.');
    } else {
        console.log('Your password needs to be at least 10 and a maxinum of 14 characters.');
    }
};

const pwContainsNum = () => {
    for (let i = 0; i < passwordSplit.length; i++){
        if (includesNum.includes(passwordSplit[i])){
            console.log('Password meets the number requirements.');
            return;
        }
    }
    console.log('Your password must contain a number.');
};

// Made checking for a character case sensitive.
const pwContainsUpperChar = () => {
    for (let i = 0; i < passwordSplit.length; i++){
        if (includesUpperChar.includes(passwordSplit[i])){
            console.log('Password meets the uppercase character requirements.');
            return;
        } 
    }
    console.log('Your password must contain an uppercase character.');
};

//2nd Additional check is for a Lowercase Charachter.
const pwContainsLowerChar = () => {
    for (let i = 0; i < passwordSplit.length; i++){
        if (includesLowererChar.includes(passwordSplit[i])){
            console.log('Password meets the lowercase character requirements.');
            return;
        } 
    }
    console.log('Your password must contain a lowercase character.'); 
}


console.log(pwMinAndMaxLength());
console.log(pwContainsNum());
console.log(pwContainsUpperChar());
console.log(pwContainsLowerChar());

//ASCII Art "PW" for password.
const ascii = `
      ****  *         *        *
      *   *   *      * *      *   
      ***      *    *   *    * 
      *          * *     * *  
      *           *       *  
`

console.log('ascii: PW', ascii);