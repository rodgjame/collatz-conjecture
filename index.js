// Consider the following operation on an arbitrary positive integer:

// If the number is even, divide it by two.
// If the number is odd, triple it and add one

function isInt(value) {
    return !isNaN(value) && 
        parseInt(Number(value)) == value && 
        !isNaN(parseInt(value, 10));
}

function collatzTester(value) {
    return isInt(value)
}

module.exports = function collatz(value) {
    if (isInt(value)) {
        return collatzTester(value);
    } else {
        throw Error("Module only takes in a positive integer")
    }
}