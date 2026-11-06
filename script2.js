function giveChange(amount) {
    
    const banknotes = [200, 100, 50, 20, 10, 5, 1];
    const banknotesReturned = [];
    let remainingAmount = amount;

    
    banknotes.forEach(function(banknote) {
        
        const count = Math.floor(remainingAmount / banknote);
        remainingAmount = remainingAmount % banknote;
        banknotesReturned[banknote] = count;
    });

    console.log(`--- Suggested change for ${amount} Manat ---`);

    banknotes.forEach(function(banknote) {
        const count = banknotesReturned[banknote];
        
        if (count > 0) {

            const prefix = count === 1 ? 'a' : count;
            const plural = count > 1 ? 's' : '';
            console.log(`${prefix} ${banknote} Manat banknote${plural}`);
        }
    });
}

giveChange(369);