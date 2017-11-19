
var List = function(initialValues = []) {
    this.values = initialValues;
};

List.prototype.append = function(appendList) {
    for (let i = 0; i < appendList.values.length; i++) {
        this.values.push(appendList.values [i]);
    }
    return this;
};

List.prototype.concat = function(concatList) {
    let newValues = [];
    for (let i = 0; i < this.values.length; i++) {
        newValues.push(this.values [i]);
    }
    for (let i = 0; i < concatList.values.length; i++) {
        newValues.push(concatList.values [i]);
    }
    return new List(newValues);
};

List.prototype.filter = function(test) {
    let newValues = [];
    for (let i = 0; i < this.values.length; i++) {
        if (test(this.values [i])) {
            newValues.push(this.values [i]);
        }
    }
    return new List(newValues);
};

List.prototype.length = function() {
    return this.values.length;
};

List.prototype.map = function(modify) {
    let newValues = [];
    for (let i = 0; i < this.values.length; i++) {
        newValues.push(modify(this.values [i]));
    }
    return new List(newValues);
};

List.prototype.foldl = function(reducer, initialValue) {
    if (initialValue !== undefined) {
        let accumulator = initialValue;
        for (let i = 0; i < this.values.length; i++) {
            accumulator = reducer(this.values [i], accumulator);
        }
        return accumulator;
    } else {
        if (this.values.length === 0) {
            throw new Error('Reduce of empty array with no initial value');
        }

        let accumulator = this.values [0];
        for (let i = 1; i < this.values.length; i++) {
            accumulator = reducer(this.values [i], accumulator);
        }
        return accumulator;
    }
};

List.prototype.foldr = function(reducer, initialValue) {
    if (initialValue !== undefined) {
        let accumulator = initialValue;
        for (let i = this.values.length - 1; i >= 0; i--) {
            accumulator = reducer(this.values [i], accumulator);
        }
        return accumulator;
    } else {
        if (this.values.length === 0) {
            throw new Error('Reduce of empty array with no initial value');
        }

        let accumulator = this.values [this.values.length - 1];
        for (let i = this.values.length - 2; i >= 0; i--) {
            accumulator = reducer(this.values [i], accumulator);
        }
        return accumulator;
    }
};

List.prototype.reverse = function() {
    let newValues = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
        newValues.push(this.values [i]);
    }
    return new List(newValues);
};

module.exports = List;