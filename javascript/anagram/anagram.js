
var Anagram = function(text) {
    this.compareString = this.sortString(text);
    this.originalString = text.toLowerCase();
};

Anagram.prototype.sortString = function(text) {
    return text.toLowerCase().split('').sort().join('');
};

Anagram.prototype.getStringList = function(args) {
    if (args.length && Array.isArray(args [0])) {
        return args[0];
    }
    return args;
};

Anagram.prototype.matches = function() {
    var res = [];
    const stringList = this.getStringList(arguments);
    
    for (var i = 0; i < stringList.length; i++) {
        if (stringList [i].toLowerCase() !== this.originalString &&
            this.sortString(stringList[i]) === this.compareString) {
            res.push(stringList[i]);
        }
    }
    
    return res;
};

module.exports = Anagram;