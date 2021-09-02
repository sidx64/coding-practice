/*
Given an input string, write a function that returns the Run Length Encoded 
string for the input string. For example, if the input string is “wwwwaaadexxxxxx”, 
then the function should return “w4a3d1e1x6” 
*/

function runLenRes(str) {
    let charList = str.split('');

    let finalVal = '',
        count = 0;

    charList.forEach((element, index) => {
        if (index === 0) {
            count = 1;
        } else {
            if (element === charList[index - 1]) {
                count += 1;
            } else {
                finalVal += charList[index - 1];
                finalVal += count;
                count = 1;
            }
            if (index === charList.length - 1) {
                finalVal += charList[index - 1];
                finalVal += count;
            }
        }
    });

    return finalVal;
}

runLenRes('wwwwaaadexxxxxx');

function sortedSquaredArray(array) {
    // Write your code here.
    result = array
        .map((item) => {
            return item ** 2;
        })
        .sort((a, b) => a - b);
    console.log(result);
    console.log(result);
    return result.sort();
}

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]);
