const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let add = 0
	for (let i = 0; i < arr.length; i++) {
    
    add += arr[i]
  }
  return add
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  if (num < 0) return undefined;
	if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
