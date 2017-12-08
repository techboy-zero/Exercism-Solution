
function foodChainClosure() {
    var FoodChain = function() {};
    const item = [
        'fly.\n',
        'spider.\nIt wriggled and jiggled and tickled inside her.\n',
        'bird.\nHow absurd to swallow a bird!\n',
        'cat.\nImagine that, to swallow a cat!\n',
        'dog.\nWhat a hog, to swallow a dog!\n',
        'goat.\nJust opened her throat and swallowed a goat!\n',
        "cow.\nI don't know how she swallowed a cow!\n",
        "horse.\nShe's dead, of course!\n"
    ];
    const lyrics = [
        'She swallowed the cow to catch the goat.\n',
        'She swallowed the goat to catch the dog.\n',
        'She swallowed the dog to catch the cat.\n',
        'She swallowed the cat to catch the bird.\n',
        'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
        'She swallowed the spider to catch the fly.\n',
        "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    ];

    function startingLyric(index) {
        const initiate = 'I know an old lady who swallowed a ';
        return `${initiate}${item[index]}`;
    };
    
    function endingLyrics(startIndex) {
        return lyrics.slice(startIndex).join('');
    };

    FoodChain.prototype.verse = function(index) {
        var result = '';
        result += startingLyric(index - 1);
        if (index < 8) result += endingLyrics(7 - index);
        return result;            
    };
    
    FoodChain.prototype.verses = function(start, end) {
        var result = '';
        for (var i = start; i <= end; i++) {
            result += this.verse(i) + '\n';
        }
        return result;
    };

    return FoodChain;
};

module.exports = foodChainClosure();