/*
You will be given an ordered list of individual integers. You need to return the list of integers as 
a string in a format of a range. But how do you explain a range? Well, according to this kata a list 
of integers can be written as a range if (1) the numbers in the given ordered list are consecutive 
on the number line, for example:- 1,2,3. (2) there are 3 or more than 3 consecutive numbers in the 
list.

What qualifies as a range?

    [1,2,3,4]   -> qualifies as a range and can be written as "1-4". (first and last elements are inclusive)
    [6,7]       -> does not qualify as a range, because there are less than 3 consecutive numbers in the list.
    [9,10,11]   -> qualifies as a range and can be written as "9-11".
    [-3,-2,-1]  -> qualifies as a range and can be written as "-3--1".

What you are supposed to do?
Given an ordered list of integers, if the integers can be written as a range then return them as range, 
else return them as integers separated by comma. You must return all the given integers in the list 
whether as a range (if it qualifies as a range) or just plain old integers.

For example:-

Input - [-6,-5,-4,0,2,6,10,11,13,14,15]
Output - "-6--4,0,2,6,10,11,13-15"
          |__|      |____| |__|
           |          |      |
  Qualifies as    Not a    is a range
  a range         range
                  (cuz only
                  two consecutive
                  numbers)

Input:- [1,3,5,7,9]
Output:- "1,3,5,7,9"

Input:- [1,2,3,4,5,6,7]
Output:- "1-7"

Input: [1,2,3,8,9,10]
Ouput: "1-3,8-10"

*/

function solution(list) {
    // TODO: complete solution
    console.log(list);
    let stack = [],
        result = [];
    count = 0;

    list.forEach((item, index) => {
        if (index === 0) {
            stack.push(list[index]);
            // console.log(stack);
        } else {
            if (Math.abs(list[index] - list[index - 1]) === 1) {
                stack.push(list[index]);
                console.log(stack);
            } else {
                stack.length > 2
                    ? result.push(stack[0] + '-' + stack[stack.length - 1])
                    : stack.forEach((item) => result.push(item));
                console.log('stack -> ' + stack);
                stack = [];
                stack.push(list[index]);
                console.log(result);
            }
            if (index === list.length - 1) {
                console.log('stack > ' + stack);
                stack.length > 2
                    ? result.push(stack[0] + '-' + stack[stack.length - 1])
                    : stack.forEach((item) => result.push(item));
            }
        }
    });
    console.log(result.join(','));
    return result.join(',');
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]); // must return '-6,-3-1,3-5,7-11,14,15,17-20'
