function palindrome(str) {
    const cleanRegex = /[a-z0-9]/g; //  Matches all lowercased characters and all numbers(are there more?). The flag /g sends all matched characters to an array.
    const cleanArr = str.toLowerCase().match(cleanRegex);   //  Lowercases the string and cleans up the string as so to send it to an array with only the data that we want to check palindromy.
    return cleanArr.join('') === cleanArr.reverse().join('')    //  Join because cleanArr is, as it suggests, an array. And reverse() is a very convenient method.
}


palindrome("eye");
palindrome("1 eye for of 1 eye.")