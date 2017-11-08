
var School = function () {
    this.school = {};
};

School.prototype = {
    roster: function() {
        return this.school;
    },
    add: function(studentName, studentGrade) {
        if (this.school[studentGrade] === undefined) {
            this.school[studentGrade] = [];
        }
        this.school [studentGrade].push(studentName);
        this.school [studentGrade].sort();
    },
    grade: function(studentGrade) {
        if (this.school[studentGrade] === undefined) return [];
        return this.school [studentGrade];
    }
};

module.exports = School;