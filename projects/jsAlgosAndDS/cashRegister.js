const currencyUnit = {  //  object for easier compared values. Multiplying by 100 to avoid float to float calculations
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
}


function checkCashRegister(price, cash, cid) {  //  cid stands for Cash-In-Drawer

    let changeSum = cash * 100 - price * 100;   //  We will use this as a basic value to do calculations. Do the same thing with the arguments as with the object above. JavaScript needs this helper because float calculations are wonky in it.
    let changeSumCheck = changeSum; //  final value to compare after the main calculation of the algorithm
    let change = [];    //  initialization
    let status = '';

    let cidSum = 0; //  This value is needed for the final check too.
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();  //  Filter the array, keeping only the positive values. Then, reverse it because it's the easier way to iterate through. 
    //  In truth, to keep up with clean programming, we should terminate all negative values in case of unforeseen data, but this is beyond the scope of this exercise.
    filteredCid.forEach(elem => {   //  through this loop we iterate from the biggest currency we have in the drawer and subtract from it if needed. You'll see.
        let curr = elem[0];     //  values. This one is the name.
        let currSum = elem[1] * 100;    // And this one is the quantity. Again multiplying by 100 for easier calculations.
        cidSum += currSum;  //  Adding each currency for final comparison. We don't care for the type(PENNY, NICKEL, etc).
        let amount = 0;     //  initilization, also needed to push the non-zero in the if value below.
        while (changeSum >= currencyUnit[curr] && currSum > 0) {    //  Loops until either when we have a lower currency in the drawer that could do better or we don't have enough of the currency in the drawer
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        // Pushing only the arrays with positive amount left in the returned object
        if (amount !== 0) {
            change.push([curr, amount / 100]);
        }
    });
    //  Choose your path. Already chosen actually. Cause that's what programming is baby.
    if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (changeSum === 0 && changeSumCheck === cidSum) {
        status = 'CLOSED';
        change = cid;
    } else status = 'OPEN';
    return { 'status': status, 'change': change };
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);