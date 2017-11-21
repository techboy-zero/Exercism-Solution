
var RLE = function () {
    return {
        encode: function(text) {
            var encodedText = '';
            var count = 0;
            var prev = !!text.length ? text.charAt(0) : '';
            for (var i = 0; i < text.length; i++) {
                if (prev === text.charAt(i)) {
                    count++;
                } else {
                    encodedText += this.charToCompress(prev, count);
                    prev = text.charAt(i);
                    count = 1;
                }
            }
            encodedText += this.charToCompress(prev, count);
            return encodedText;
        },
        decode: function(text) {
            var decodedText = '';
            var i = 0;
            var count = 0;
            while (i < text.length) {
                if (text.charAt(i) >= '0' && text.charAt(i) <= '9') {
                    count = count * 10 + parseInt(text.charAt(i));
                } else {
                    decodedText += this.charToAdd(text.charAt(i), count);
                    count = 0;
                }
                i++;
            }
            return decodedText;
        },
        charToCompress: function(char, count) {
            if (count > 1) return ('' + count + char);
            return char;
        },
        charToAdd: function(char, count) {
            if (!count) count++;
            return char.repeat(count);
        }
    };
};

module.exports = RLE();