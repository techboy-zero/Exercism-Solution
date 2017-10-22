
var SpaceAge = function (randomseconds) {
    this.seconds = randomseconds;
    var earthSeconds = 31557600;
    var mercurySeconds = earthSeconds * 0.2408467;
    var venusSeconds = earthSeconds * 0.61519726;
    var marsSeconds = earthSeconds * 1.8808158;
    var jupiterSeconds = earthSeconds * 11.862615;
    var saturnSeconds = earthSeconds * 29.447498;
    var uranusSeconds = earthSeconds * 84.016846;
    var neptuneSeconds = earthSeconds * 164.79132;

    this.onEarth = function () {
        const earthAge = (this.seconds / earthSeconds).toFixed(2);
        return parseFloat(earthAge);
    }
    this.onMercury = function () {
        const mercuryAge = (this.seconds / mercurySeconds).toFixed(2);
        return parseFloat(mercuryAge);
    }
    this.onVenus = function () {
        const venusAge = (this.seconds / venusSeconds).toFixed(2);
        return parseFloat(venusAge);
    }
    this.onMars = function () {
        const marsAge = (this.seconds / marsSeconds).toFixed(2);
        return parseFloat(marsAge);
    }
    this.onJupiter = function () {
        const jupiterAge = (this.seconds / jupiterSeconds).toFixed(2);
        return parseFloat(jupiterAge);
    }
    this.onSaturn = function () {
        const saturnAge = (this.seconds / saturnSeconds).toFixed(2);
        return parseFloat(saturnAge);
    }
    this.onUranus = function () {
        const uranusAge = (this.seconds / uranusSeconds).toFixed(2);
        return parseFloat(uranusAge);
    }
    this.onNeptune = function () {
        const neptuneAge = (this.seconds / neptuneSeconds).toFixed(2);
        return parseFloat(neptuneAge);
    }
};

module.exports = SpaceAge;