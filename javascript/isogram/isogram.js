
var Isogram = function (text) {
    let charList = {};
    let nonAsciiRegex = /[^\x00-\x7F]/;
    this.isogramStatus = true;
    for (let i = 0; i < text.length; i++) {
        const tempChar = text.charAt(i).toLowerCase();
        if (!nonAsciiRegex.test(tempChar) && !this.isAlpha(tempChar)) continue;

        if (charList.hasOwnProperty(tempChar)) {
            this.isogramStatus = false;
            break;
        }
        charList [tempChar] = true;
    }
};

Isogram.prototype.isIsogram = function () {
    return this.isogramStatus;
};

Isogram.prototype.isAlpha = function (char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
};

module.exports = Isogram;