
var Matrix = function (matrixString) {
    const matrixRowsString = matrixString.split('\n');
    this.rows = matrixRowsString.map((row) => {
        return row.split(' ').map ((element) => parseInt(element));
    });
    this.columns = this.rows [0].map((column, index) => {
        return this.rows.map ((row) => row [index]);
    })
};

module.exports = Matrix;