/*

    Given a string of words, you need to find the highest scoring word.
    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    You need to return the highest scoring word as a string.
    If two words score the same, return the word that appears earliest in the original string.
    All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    inputList = x.split(' ');
    scoreList = [];

    inputList.forEach((word) => {
        let score = 0;
        word.split('').forEach((letter) => {
            score = score + alphabet.indexOf(letter) + 1;
        });
        scoreList.push(score);
    });

    return inputList[scoreList.indexOf(Math.max(...scoreList))];
}

high('take me to seminar'); //seminar
