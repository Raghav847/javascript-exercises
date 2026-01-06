const palindromes = function (str) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedStr = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanum.includes(char))
        .join('');
    
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
