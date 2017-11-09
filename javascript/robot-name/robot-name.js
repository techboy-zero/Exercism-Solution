
var Robot = function () {
    this.name = null;
    this.initiate();
};

Robot.prototype = {
    generatedNames: {},
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max) + 1;
        return Math.floor(Math.random() * (max - min)) + min;
    },
    generateName: function() {
        var name = "";
        do {
            name = "";
            name += (String.fromCharCode(this.getRandomInt(65, 90)));
            name += (String.fromCharCode(this.getRandomInt(65, 90)));
            name += this.getRandomInt(1, 9);
            name += this.getRandomInt(1, 9);
            name += this.getRandomInt(1, 9);
        }while (!!this.generatedNames.hasOwnProperty(name));
        this.generatedNames [name] = true;
        return name;
    },
    initiate : function () {
        this.name = this.generateName();
    },
    reset : function () {
        this.name = this.generateName();
    }
};

module.exports = Robot;