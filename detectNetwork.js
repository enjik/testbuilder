// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var twoBit = cardNumber.slice(0, 2);
  var threeBit = cardNumber.slice(0, 3);
  var fourBit = cardNumber.slice(0, 4);
  var sixBit = cardNumber.slice(0, 6);
  var cardLength = cardNumber.length;
  if (cardLength === 14 && (['38', '39'].includes(twoBit))) {
    return "Diner's Club";
  } else if (cardLength === 15 && (twoBit === '34' || twoBit === '37')) {
    return 'American Express';
  } else if ([16, 18, 19].includes(cardLength) && (['4903', '4905', '4911', '4936', '6333', '6759'].includes(fourBit) || ['564182', '633110'].includes(sixBit))) {
    return 'Switch';
  } else if ([13, 16, 19].includes(cardLength) && twoBit.charAt(0) === '4') {
    return 'Visa';
  } else if (cardLength === 16 && ['51', '52', '53', '54', '55'].includes(twoBit)) {
    return 'MasterCard';
  } else if ([16, 19].includes(cardLength) && (fourBit === '6011' || ['644', '645', '646', '647', '648', '649'].includes(threeBit) || twoBit === '65')) {
    return 'Discover';
  } else if (cardLength > 11 && cardLength < 20 && ['5018', '5020', '5038', '6304'].includes(fourBit)) {
    return 'Maestro';
  } else if ([16, 17, 18, 19].includes(cardLength) && (['624', '625', '626'].includes(threeBit) || ((sixBit.parseInt() > 622125 && sixBit.parseInt() < 622926) || ['6282', '6283', '6284', '6285', '6286', '6287', '6288'].includes(fourBit)))) {
    return 'China UnionPay';
  } else {
    return 'Could not identify network.';
  }
};


/*

China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

automated tests for step 3:

var tests = [38345678901234,
39345678901234,
343456789012345,
373456789012345,
4123456789012,
4123456789012345,
4123456789012345678,
5112345678901234,
5212345678901234,
5312345678901234,
5412345678901234,
5512345678901234]

var runTests = function(arr) {
for (var i = 0; i < arr.length; i++) {
  console.log( detectNetwork(arr[i].toString()));
}
};

runTests(tests)

*/
