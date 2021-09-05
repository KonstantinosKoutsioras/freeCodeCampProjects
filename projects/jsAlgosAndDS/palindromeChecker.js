function palindrome(str) {
    const cleanRegex = /[a-z0-9]/g;
    const cleanArr = str.toLowerCase().match(cleanRegex);
    return cleanArr.join('') === cleanArr.reverse().join('')
}


palindrome("eye");
palindrome("1 eye for of 1 eye.")