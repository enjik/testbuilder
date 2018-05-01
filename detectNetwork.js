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
  var cardLength = cardNumber.length;
  if (cardLength === 14 && (['38', '39'].includes(twoBit))) {
    return "Diner's Club";
  } else if (cardLength === 15 && (twoBit === '34' || twoBit === '37')) {
    return 'American Express';
  } else if ([13, 16, 19].includes(cardLength) && twoBit.charAt(0) === '4') {
    return 'Visa';
  } else if (cardLength === 16 && ['51', '52', '53', '54', '55'].includes(twoBit)) {
    return 'MasterCard';
  } else if ([16, 19].includes(cardLength) && (fourBit === '6011' || ['644', '645', '646', '647', '648', '649'].includes(threeBit) || twoBit === '65')) {
    return 'Discover';
  } else if (cardLength >= 12 && cardLength <= 19 && ['5018', '5020', '5038', '6304'].includes(fourBit)) {
    return 'Maestro';
  } else {
    return 'Could not identify network.';
  }
};


/*
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
