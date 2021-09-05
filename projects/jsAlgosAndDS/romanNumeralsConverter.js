let romans = {  //  ALL THE ROMANS
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',

    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',

    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',

    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
};

function convertToRoman(num) {
    if (num < 0) return null;
    let i = 1;  //  increment for the level of digit
    let romanNumber = [];   //  Array to push roman digits
    while (num > 0) {    //  splitting the number in his digits
        let mod = parseInt(num % 10) * i; //  parse as so to get rid of floats
        romanNumber.unshift(romans[mod])  //  push it at the index 0
        num /= 10;  //  division by 10 sends the current digit past floating point
        i *= 10;   //  increment the incrementor
    }
    return romanNumber.join(''); //  bring the family together(join with no spaces of course as per the roman notation)
}

convertToRoman(36);