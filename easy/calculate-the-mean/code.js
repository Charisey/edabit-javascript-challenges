function mean(numbers) {
    let total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return Number((total / numbers.length).toFixed(2))

};

module.exports = mean;
