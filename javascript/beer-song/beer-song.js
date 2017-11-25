
var BeerSong = function() {
    this.lyrics = [];
    this.initiate();
};

BeerSong.prototype.initiate = function() {
    for (var i = 0; i < 100; i++) {
        if (!i) {
            this.lyrics.push(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`);
        } else if (i === 1) {
            this.lyrics.push(`1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`);
        } else if (i === 2) {
            this.lyrics.push(`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`);
        } else {
            this.lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n`);
        }
    }
};

BeerSong.prototype.verse = function(line) {
    return this.lyrics[line];
};

BeerSong.prototype.sing = function(start, end) {
    
    if (end === undefined) {
        return this.lyrics.slice(0, start + 1).reverse().join('\n');
    } else if (start <= end) {
        return this.lyrics.slice(start, end + 1).join('\n');
    } else {
        start = start ^ end;
        end = start ^ end;
        start = start ^ end;
        return this.lyrics.slice(start, end + 1).reverse().join('\n');
    }
};

module.exports = BeerSong;