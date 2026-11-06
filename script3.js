function checkLuhn(ccNumber) {
    if (typeof ccNumber !== 'string') {
        ccNumber = ccNumber.toString();
    }

    const length = ccNumber.length;

    
    const checkDigitStr = ccNumber.substring(length - 1, length);
    const checkDigit = parseInt(checkDigitStr, 10); // Base 10
    const payloadStr = ccNumber.substring(0, length - 1);
    const payloadArray = payloadStr.split('').reverse();

    let sum = 0;

    payloadArray.forEach(function(digitStr, index) {
        let digit = parseInt(digitStr, 10);

        if (index % 2 === 0) {
            digit *= 2;
            digit = (digit > 9) ? digit - 9 : digit;
        }

        sum += digit;
    });

    const calculatedCheck = (10 - (sum % 10)) % 10;
    const isValid = (calculatedCheck === checkDigit);
    const status = isValid ? 'Validated' : 'Not Validated';
    console.log(`CC: ${ccNumber} | Calculated Check: ${calculatedCheck} | Actual Check: ${checkDigit} | ${status}`);
}
checkLuhn("4556483529563734"); 
checkLuhn("4485287305655689");
checkLuhn("5355201015310653");
checkLuhn("375412915808533");
checkLuhn(4716589440775905); 