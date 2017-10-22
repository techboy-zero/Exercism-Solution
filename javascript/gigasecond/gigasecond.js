
var Gigasecond = function (dateTime) {
    this.date = function () {
        return new Date(dateTime.getTime() + 1000000000000);
    };
};

module.exports = Gigasecond;