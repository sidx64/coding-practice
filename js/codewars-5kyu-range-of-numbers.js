/*
Description

Your task is to take arrays of numbers and compress them into ranges. The numbers in the 
array are mostly consecutive. If you convert them as ranges, it will save a lot of space. 
You should write a function that will convert an array of numbers into a string. A range, 
or series of consecutive numbers, will be represented as two numbers separated by an 
underscore, a range of one just by the number its self and multiple ranges separated by 
commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:

toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array
Warnings

The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same 
number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and vise versa for the 
toArray function. Also, ranges of 2 digits will take the same space whether they are 
represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there 
will be no compression, but represent them as a range anyway for consistency.

Good luck!

If you're finding this Kata a little hard, then maybe try my other one first

https://www.codewars.com/kata/find-the-first-non-consecutive-number

*/

// Should return a string representing the ranges
function toRange(arr) {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0].toString();

    let stack = [],
        result = [];

    arr = [...new Set(arr)].sort((a, b) => a - b);

    arr.forEach((num, idx) => {
        if (idx === 0) {
            stack.push(num);
        } else {
            if (Math.abs(arr[idx] - arr[idx - 1]) === 1) {
                stack.push(arr[idx]);
            } else {
                if (stack.length >= 2) {
                    result.push(stack[0] + '_' + stack[stack.length - 1]);
                    stack = [];
                    stack.push(arr[idx]);
                } else {
                    result.push(stack[0]);
                    stack = [];
                    stack.push(arr[idx]);
                }
            }
            if (idx === arr.length - 1) {
                if (stack.length === 1) {
                    result.push(arr[idx]);
                } else {
                    result.push(stack[0] + '_' + stack[stack.length - 1]);
                }
            }
        }
    });

    return result.join(',');
}

// Should return an array
function toArray(str) {
    if (str.length === 1) return [parseInt(str)];
    if (str.trim().length === 0) return [];
    result = [];
    list = str.split(',');
    list.forEach((item) => {
        let stack = [];
        let [a, b] = item.split('_').map(Number);
        if (b === undefined) {
            result.push(a);
        } else {
            for (var i = a; i <= b; i++) {
                result.push(i);
            }
        }
    });
    return result;
}

toRange([3, 4, 5, 6, 9]); // '3_6,9'
toArray('3_6,9'); // [3,4,5,6,9]
toArray('1');
