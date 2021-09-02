/*
Write a function which makes a list of strings representing all of the ways 
you can balance n pairs of parentheses

EXAMPLES
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

the i’th character can be ‘{‘ if and only if the count of ‘{‘ till i’th is less than n and 
the i’th character can be ‘}’ if and only if the count of ‘{‘ is greater than the count of ‘}’ till index i.

*/

function balancedParens(n) {
    if (n === 0) return [];

    let stack = new Array(n).fill(0);
}
