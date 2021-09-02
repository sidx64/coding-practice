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
    if (n === 0) return [''];
    if (n === 1) return ['()'];

    let stack = [];
    let result = [];

    // total open must equal total close
    // add closedParentheses only if [closedParentheses < openParentheses]

    // n = 3
    // openP = 1
    // closeP = 0
    // stack => ['(']

    function backTrack(openP, closeP) {
        if (openP === n && closeP === n) {
            result.push(stack.join(''));
        }

        if (openP < n) {
            stack.push('(');
            backTrack(openP + 1, closeP);
            stack.pop();
        }
        if (closeP < openP) {
            stack.push(')');
            backTrack(openP, closeP + 1);
            stack.pop();
        }
    }

    backTrack(0, 0);
    console.log(result);
    return result;
}

balancedParens(3);
