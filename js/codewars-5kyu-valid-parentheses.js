/*
Write a function that takes a string of parentheses, and determines 
if the order of the parentheses is valid. The function should return 
true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100

*/

function validParentheses(parens) {
    let stack = [];
    let input = parens.split('');

    input.forEach((item, index) => {
        if (item === '(') {
            stack.push(item);
        } else if (item === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(')');
            }
        }
    });
    console.log(stack);
    return stack.length ? false : true;
}

console.log(validParentheses('())'));
