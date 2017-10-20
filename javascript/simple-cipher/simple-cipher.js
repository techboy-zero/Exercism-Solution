
var Cipher = function (cipher) {
    this.key = cipher !== undefined ? cipher : 'a'.repeat(100);
    this.keyLength = this.key.length;

    if (this.key.match(/[A-Z0-9]/) || this.key === '') {
        throw new Error ('Bad key');
    }

    this.getEncodedChar = (element, index) => {
        index = index >= this.keyLength ? index % this.keyLength : index;
        var ascii = element.charCodeAt(0) + this.key.charCodeAt(index) - 97;
        if (ascii > 122) ascii = ascii - 123 + 97;
        return String.fromCharCode(ascii);
    };

    this.getDecodedChar = (element, index) => {
        index = index >= this.keyLength ? index % this.keyLength : index;
        var ascii = element.charCodeAt(0) - this.key.charCodeAt(index) + 97;
        if (ascii < 97) ascii = ascii - 96 + 122;
        return String.fromCharCode(ascii);
    };

    this.encode = (text) => {
        var cipherText = '';
        var textCharacters = text.split("");
        textCharacters.forEach(function(element, index) {
            cipherText += this.getEncodedChar (element, index);
        }, this);
        return cipherText;
    };

    this.decode = (text) => {
        var decipherText = '';
        var textCharacters = text.split("");
        textCharacters.forEach(function(element, index) {
            decipherText += this.getDecodedChar (element, index);
        }, this);
        return decipherText;
    };
};

module.exports = Cipher;