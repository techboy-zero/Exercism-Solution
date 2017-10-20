
var Pangram = function(text) {
    var dictionary = {
        length: 0
    };
    var newText = text.toUpperCase().replace(/[^\x00-\x7F]/g, '');
    var textLength = newText.length;
    var isalpha = /[a-z]/i;

    for (var i = 0; i < textLength; i++) {
        const element = newText.charAt(i);
        if (isalpha.test(element) && !dictionary.hasOwnProperty(element)) {
            dictionary [element] = true;
            dictionary.length++;
        }
    }
    this.isPangram = () => {
        return dictionary.length == 26;
    };
};

module.exports = Pangram;