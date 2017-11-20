
var Hamming = function () {

};

Hamming.prototype.compute = function (dnaStrand0, dnaStrand1) {
    if (dnaStrand0.length !== dnaStrand1.length) {
        throw new Error('DNA strands must be of equal length.');
    }
    let hammingDistance = 0;
    for (let i = 0; i < dnaStrand0.length; i++) {
        if (dnaStrand0.charAt(i) !== dnaStrand1.charAt(i)) {
            hammingDistance++;
        }
    }
    return hammingDistance;
};

module.exports = Hamming;