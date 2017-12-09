
var ETL = function() {};

ETL.prototype.transform = function(old) {
    const updated = {};
    for (const key in old) {
        const charSet = old[key];
        for (const index in charSet) {
            updated [charSet[index].toLowerCase()] = parseInt(key);
        }
    }
    return updated;
};

module.exports = ETL;