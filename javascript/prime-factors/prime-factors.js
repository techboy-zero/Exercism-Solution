
var primeFactors = {
    for: function (num) {
        var result = [];
        for (var i = 2; i * i <= num; i++) {
            while (num % i === 0) {
                result.push(i);
                num /= i;
            }
        }
        if (num > 1) result.push (num);
        return result;
    }
};

module.exports = primeFactors;