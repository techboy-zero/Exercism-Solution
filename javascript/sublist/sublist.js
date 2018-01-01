
function ListWrapper() {
    function failure (pattern) {
        let pi = [];
        let shift = 0;
        const length = pattern.length;
        pi.push(0);
        pi.push(0);

        for (var i = 2; i <= length; ++i) {
            while (shift > 0 && pattern [shift] != pattern [i - 1]) shift = pi [shift];
            if (pattern [shift] == pattern [i - 1]) shift++;
            pi.push(shift);
        }
        return pi;
    }
    /* Using KMP algorithm to achieve better complexity */
    function subSet (queryString, patternString, patternPi) {
        let shift = 0;
        const queryLength = queryString.length;
        const patternLength = patternString.length;
    
        for (var i = 0; i < queryLength; ++i) {
            while (shift > 0 && patternString [shift] != queryString [i]) shift = patternPi [shift];
            if (patternString [shift] == queryString [i]) ++shift;
            if (shift == patternLength) {
                return true;
            }
        }
        return !patternLength || false;
    }

    var List = function(givenList = []) {
        this.list = givenList;
        this.patternMatch = failure(this.list);
    }
    
    List.prototype.compare = function(compList) {
        var subList = subSet(compList.list, this.list, this.patternMatch);
        var superList = subSet(this.list, compList.list, compList.patternMatch);
        if (superList && subList) return 'EQUAL';
        else if (!superList && subList) return 'SUBLIST';
        else if (superList && !subList) return 'SUPERLIST';
        return 'UNEQUAL';
    };

    return List;
}

module.exports = ListWrapper();