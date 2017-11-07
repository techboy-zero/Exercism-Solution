
var SecretHandshake = function (num) {
    if (typeof num !== "number") {
        throw new Error('Handshake must be a number');
    }
    this.number = num;
    this.secretMessages = ['wink', 'double blink', 'close your eyes', 'jump'];
};

SecretHandshake.prototype.commands = function () {
    var result = [];
    for (var i = 0; i < 4; i++) {
        if ((1 << i) & this.number) {
            result.push(this.secretMessages [i]);
        }
    }
    if ((1 << 4) & this.number) {
        result.reverse();
    }
    return result;
};

module.exports = SecretHandshake;