
const BigInt = require('./big-integer');

function GrainsWrapper() {
  const wheatsOnSquare = ['0'];
  const two = BigInt('2');
  let sum = BigInt.zero;

  for(let i = 1; i <= 64; i++) {
    wheatsOnSquare.push(two.pow(i - 1).toString());
    sum = sum.add(wheatsOnSquare[i]);
  }

  const Grains = function() {};

  Grains.prototype.square = function(number) {
    return wheatsOnSquare[number].toString();
  }

  Grains.prototype.total = function() {
    return sum.toString();
  }

  return Grains;
}

module.exports = GrainsWrapper();