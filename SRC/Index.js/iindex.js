function getCardBrand(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    // Visa: starts with 4
    if (/^4/.test(num)) return 'Visa';

    // MasterCard: 51-55 or 2221-2720
    if (/^(5[1-5])/.test(num) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(num)) {
        return 'MasterCard';
    }

    // Elo: 4011, 4312, 4389, etc. (add more as needed)
    if (/^(4011|4312|4389)/.test(num)) return 'Elo';

    // American Express: 34 or 37
    if (/^(34|37)/.test(num)) return 'American Express';

    // Dinners Club: 36 or 38
    if (/^(36|38)/.test(num)) return 'Dinners Club';

    // Discover: 6011, 65, 644-649
    if (/^(6011|65|64[4-9])/.test(num)) return 'Discover';

    // Hipercard: 6062
    if (/^6062/.test(num)) return 'Hipercard';

    return 'Unknown';
}
