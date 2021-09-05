function telephoneCheck(str) {
    const validRegex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;
    return validRegex.test(str);
}

telephoneCheck("555-555-5555");