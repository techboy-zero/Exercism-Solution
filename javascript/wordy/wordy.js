
var WordProblem = function (question) {
    this.expressionString = question.replace("What is ", "").replace("?", "");
    this.expression = this.stringToExpression (this.expressionString);

};

WordProblem.prototype.stringToExpression = function (expressionString) {
    return expressionString
        .replace(/plus/g, "+")
        .replace(/minus/g, "-")
        .replace(/multiplied by/g, "*")
        .replace(/divided by/g, "/");
};

WordProblem.prototype.evaluate = function (expression) {
    var result = 0;
    var op = '+';
    var number = '';
    var isDigit = true;
    for (var i = 0; i <= expression.length; i++) {
        let currentChar = '';
        if (i < expression.length) currentChar = expression.charAt(i);

        if (currentChar === ' ') {
            isDigit = !isDigit;
        } else if (i < expression.length && isDigit) {
            number += currentChar;
        } else {
            if (op === '+') {
                result += parseInt(number);
            } else if (op === '-') {
                result -= parseInt(number);
            } else if (op === '*') {
                result *= parseInt(number);
            } else if (op === '/') {
                result /= parseInt(number);
            }
            number = '';
            op = currentChar;
        }
    }

    return result;
}

WordProblem.prototype.answer = function () {
    const testRegex = /[^0-9\+\*\/-\s]/;
    if (testRegex.test(this.expression)) throw new ArgumentError();
    return this.evaluate(this.expression);
};

var ArgumentError = function () {
    this.stack = (new Error()).stack;
};
ArgumentError.prototype = Object.create(Error.prototype);

module.exports = {
    WordProblem,
    ArgumentError
};