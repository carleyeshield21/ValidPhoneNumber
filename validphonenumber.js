// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

function validPhoneNumber(phoneNumber){
    
    if(phoneNumber[0] == '(' && phoneNumber[4] == ')' && phoneNumber[5] == ' ' && phoneNumber[9] == '-' ){
        console.log(`${phoneNumber} is a VALID phone number`)
    } else {
        console.log(`${phoneNumber} is an INVALID phone number`)
    }
}
validPhoneNumber('(123) 456-7890')
console.log('=====')
validPhoneNumber('(1111)555 2345')
console.log('=====')
validPhoneNumber('(098) 123 4567')