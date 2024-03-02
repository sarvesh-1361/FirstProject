a = 200;
b = 7;
console.log(a*b)

function isLove(str){
    if(str === 'Love'){
        return true;
    }
}
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare characters from start and end of the string
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example usage
let inputString = "A man, a plan, a canal, Panama!";
console.log(`"${inputString}" is a palindrome:`, isPalindrome(inputString));

function printname(name){
    console.log(name);
}