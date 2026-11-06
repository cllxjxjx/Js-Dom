for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        for (let c = 1; c <= 9; c++) {
            const number = a * 100 + b * 10 + c;
            const sumOfCubes = number
                .toString()         
                .split('')          
                .reduce((sum, digitChar) => {
                    const digit = Number(digitChar);
                    return sum + Math.pow(digit, 3);
                }, 0); 
                
            if (number === sumOfCubes) {
                console.log(`Solution found: ${number} (A=${a}, B=${b}, C=${c})`);
            }
        }
    }
}