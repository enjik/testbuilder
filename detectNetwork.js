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
  var cardLength = cardNumber.length;
  if (cardLength === 14 && (['38', '39'].includes(twoBit))) {
    return "Diner's Club";
  } else if (cardLength === 15 && (twoBit === '34' || twoBit === '37')) {
    return 'American Express';
  } else if ([13, 16, 19].includes(cardLength) && twoBit.charAt(0) === '4') {
    return 'Visa';
  } else if (cardLength === 16 && ['51', '52', '53', '54', '55'].includes(twoBit)) {
    return 'Mastercard';
  }
};
