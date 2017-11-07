
var Triangle = function (rowNumber) {
    this.rows = [];
    for(var i = 0; i < rowNumber; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            var current = 0;
            if (j - 1 >= 0) current += this.rows [i - 1][j - 1];
            if (j < i) current += this.rows [i - 1][j];
            current = current > 0 ? current : 1;
            row.push(current);
        }
        this.rows.push(row);
    }
    this.lastRow = this.rows [this.rows.length - 1];
};

module.exports = Triangle;