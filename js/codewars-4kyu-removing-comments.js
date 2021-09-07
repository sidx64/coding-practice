/*
Complete the solution so that it strips all text that follows any of a set of comment markers 
passed in. Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
    apples, pears # and bananas
    grapes
    bananas !apples

The output expected would be:
    apples, pears
    grapes
    bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
    // split the input into an array for each line (using carriage return as a delimiter)
    // iterate through each item of the array and find the index of the first occurrence of the comment symbol(s)
    // slice the string till the comment symbol and store in a stack list
    // join and share the final string from stack

    lineList = input.split('\n');
    // console.log(lineList);
    let stack = [];
    lineList.forEach((item, index) => {
        // console.log(item);
        commentTag = false;
        let tempArr = [];
        item.split('').forEach((letter, idx) => {
            // console.log('item ->' + letter + '<-');
            if (!markers.includes(letter)) {
                if (!commentTag) tempArr.push(letter);
            } else {
                commentTag = true;
            }
        });
        // console.log('tempArr -> ', tempArr.join('') + '<-');
        stack.push(tempArr.join('').trim());
    });
    // console.log('Result -> ' + stack.join('\n') + '<-');
    return stack.join('\n');
}

solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']); //'apples, plums\npears\noranges'
solution('Q @b\nu\ne -e f g', ['@', '-']); //, 'Q\nu\ne'
