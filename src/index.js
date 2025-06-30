function sumRange(n) {
    if (n == 1) {
        return 1;
    };
    return n + sumRange(n - 1);
};

function power(n, e) {
    if (e == 0) {
        return 1;
    };
    return n *= power(n, e - 1);
};

function factorial(n) {
    if (n < 0)
    {
        console.log('Positive integers only.');
        return;
    }
    if (n == 1 || n == 0)
    {
        return 1;
    }
    return n * factorial(n - 1)
};

function all(arr, check) {
    if (arr.length == 0) {
        return true;
    }
    let array = Array.from(arr);
    let current = array.pop();
    if (!check(current)) {
        return false;
    }
    return all(array, check);
}

function productOfArray(arr) {
    if (arr.length == 0) {
        return 1;
    }
    let array = Array.from(arr);
    let current = array.pop();
    return current * productOfArray(array);
}

function contains(obj, val) {
    for(let key in obj) {
        if(typeof(obj[key]) == 'object') {
            if(contains(obj[key], val)){
                return true;
            }
        }
        if(obj[key] == val) {
            return true;
        }
    }
    return false;
};

function totalIntegers(arr) {
    if (arr.length == 0) {
        return 0;
    };
    let array = Array.from(arr);
    let current = array.pop();
    if(Array.isArray(current)) 
        return totalIntegers(current) + totalIntegers(array);
    if(Number.isInteger(current))
        return 1 + totalIntegers(array);
    else
        return 0;
};

function sumSquares(arr) {
    if (arr.length == 0) {
        return 0;
    };
    let array = Array.from(arr);
    let current = array.pop();
    if (Array.isArray(current)) {
        return sumSquares(current) + sumSquares(array);
    }
    if (Number.isInteger(current)) {
        return current**2 + sumSquares(array);
    } else {
        return sumSquares(array);
    }
};

function replicate(num, times) {
    if(times <= 0) {
        return [];
    }
    return [num].concat(replicate(num, times - 1));
}

function sumDigits(n) {
    let chars = n.toString().split('');
    if (chars.includes('-')) {
        console.log('Negative numbers not allowed.')
        return;
    };
    let digits = chars.map(Number);
    if (digits.length == 1) {
        return digits[0];
    };
    let currentNum = digits.pop();
    let newInput = Number(digits.join(''));
    return currentNum + sumDigits(newInput);
}

function flatten(array) {
    if (array.length == 0)
        return [];
    let arr = Array.from(array);
    console.log(arr);
    let current = arr.shift();
    console.log(current);

    if (Array.isArray(current)) {
        console.log('current is array');
        return flatten(current).concat(flatten(arr));
    }
    if (!Array.isArray(current)) {
        console.log('current is not array');
        return [current].concat(flatten(arr));
    }
}

function reverseString(string) {
    if (string.length == 0)
        return '';
    if (string.length == 1)
        return string;
    let chars = string.split('');
    let current = chars.pop();
    console.log(current);
    let rest = chars.join('');
    console.log(rest);
    return current.concat(reverseString(rest));
}

function nestedEvenSum(obj) {
    // Initialize sum accumulator
    let sum = 0;
    // Loop over all key-value pairs in obj
    for (let key in obj) {
        // Declare variable for current value
        let value = obj[key];
        // If it is a nested loop, recursively check it
        if (typeof(value) === 'object' && value !== null && !Array.isArray(value)) {
            sum += nestedEvenSum(value);
        }
        // Otherwise, check if it is a number
        if (Number.isInteger(value)) {
            // If a number, check for evenness and add to sum
            if (value % 2 === 0) {
                sum += value;
            }
        }
    }
    return sum;
};

function deepEvenSum(input) {
    // Initialize sum accumulator
    let sum = 0;
    // Check if input is of type object
    if (typeof(input) === 'object' && input !== null) {
        // Check if it is an array, recurse with for...of
        if (Array.isArray(input)) {
            for (let value of input) {
                sum += deepEvenSum(value);
            }
        } else {
            // If not array, is regular object = for...in
            for (let key in input) {
                let value = input[key];
                sum += deepEvenSum(value);
                }
        }
    // If not an object, check for even number and add
    } else if (Number.isInteger(input) && input % 2 === 0) {
        sum += input;
    }
    // Return total sum at end of recursion
    return sum;
};

function getFirstNPrimes(n) {
    // Initialize counter to keep track of numbers printed
    let counter = 0;
    // Initialize number to start checking from
    let num = 2;
    // Initialize array to store primes
    let firstNPrimes = [];
    // Loop until counter has hit n prints
    while (counter < n) {
        if(isPrime(num)) {
            firstNPrimes.push(num);
            counter++;
        }
        num++;
    }
    return firstNPrimes;
};

// Helper function for getFirstPrimes()
function isPrime(n) {
    // Safety check for number equal to or less than 1
    if (n <= 1) return false;
    // 2 is the first prime number, no integers between it and 1
    if (n === 2) return true;
    // Check for evenness which disqualifies, only check odds after
    if (n % 2 === 0) return false;
    // Otherwise, check all numbers between 1 and the target for being divisible
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i == 0) return false;
    };
    // If it was not divisible by any, is a prime, return true
    return true;
};

