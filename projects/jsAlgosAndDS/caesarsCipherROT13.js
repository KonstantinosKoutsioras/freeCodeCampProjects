function rot13(str) {
    let chars = str.split('');
    let codeA = 'A'.charCodeAt(0);
    let codeN = 'N'.charCodeAt(0);
    let codeZ = 'Z'.charCodeAt(0);
    console.log(codeA, codeN, codeZ)
    for (let i = 0; i < chars.length; i++) {
        let code = chars[i].charCodeAt(0);
        if (code >= codeA && code <= codeZ) {
            if (code < codeN) chars[i] = String.fromCharCode(code + 13);
            else chars[i] = String.fromCharCode(code - 13);
        }
    }
    return chars.join('');
}

rot13("SERR PBQR PNZC");