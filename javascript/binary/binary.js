
var Binary = function (binary) {
    this.toDecimal = function () {
        const invalid = /[2-9a-zA-z]/;
        if (invalid.test(binary)) return 0;
        
        var length = binary.length;
        var decimal = 0;
        for (var i = 0; i < length; i++) {
            decimal = decimal * 2 + parseInt(binary.charAt(i));
        }
        return decimal;
    }
};

module.exports = Binary;