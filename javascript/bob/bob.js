
var Bob = function () {

    this.isQuestion = function(text) {
        return /.\?$/.test(text);
    };

    this.isShouting = function(text) {
        var exclaim = /.\!$/.test(text);
        var upperCase = !(/[a-z0-9]/.test(text));
        var num = /[0-9]/.test (text);
        
        return upperCase ? true : exclaim && num;
    };

    this.isEmpty = function(text) {
        return !text.length;
    }

    this.hey = function (text) {
        var cleanText = text.trim();
        if (this.isEmpty(cleanText)) {
            return 'Fine. Be that way!';
        }
        if (this.isShouting(cleanText)) {
            return 'Whoa, chill out!';
        }
        if (this.isQuestion(cleanText)) {
            return 'Sure.';
        }
        return 'Whatever.';
    };
};

module.exports = Bob;