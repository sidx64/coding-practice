/*

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns 
an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') 
    in ASCII. (No need to handle fancy punctuation.)

    Matches should be case-insensitive, and the words in the result should be lowercased.

    Ties may be broken arbitrarily.

    If a text contains fewer than three unique words, then either the top-2 or top-1 words 
    should be returned, or an empty array if a text contains no words.

Examples:

top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

*/

function topThreeWords(text) {
    if (text.length === 0) return [];
    let wordList = text
        .replace(/\s/g, ' ') // remove whitespace
        .replace(/[^a-zA-Z0-9']/g, ' ')
        .replace(/\/\//g, '') // remove comment symbol
        .replace(/[ ][\']/g, ' ')
        .replace(/,/g, '') // remove commas
        .replace(/[.]/g, '') // remove fullstops
        .split(' ');
    wordList = wordList.filter(String);
    counts = {};

    wordList.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });

    sortedCounts = Object.entries(counts)
        .sort((a, b) => a[1] - b[1])
        .reduce(
            (_sortedObj, [k, v]) => ({
                ..._sortedObj,
                [k]: v,
            }),
            {}
        );

    keyList = Object.keys(sortedCounts).reverse();
    valList = Object.values(sortedCounts).reverse();

    let stack = [];
    let tempArr = [];

    keyList.forEach((item, index) => {
        console.log(item);
        if (index === 0) {
            tempArr.push(item);
            console.log('tempArr -> ', tempArr);
            if (index === keyList.length - 1) stack.push(tempArr);
        } else {
            if (valList[index] === valList[index - 1]) {
                tempArr.push(item);
                console.log('tempArr1 -> ', tempArr);
            } else {
                if (tempArr.length) stack.push(tempArr.sort(customSort));
                tempArr = [];

                tempArr.push(item);
            }
            if (index === keyList.length - 1) {
                console.log('tempArr2 -> ', tempArr);
                stack.push(tempArr.sort(customSort));
            }
        }
    });

    let cnt = 0;
    let finalList = [];
    stack.forEach((item) => {
        item.forEach((word) => {
            if (cnt < 3) finalList.push(word);
            cnt += 1;
        });
    });

    return finalList;
}

const customSort = (a, b) => {
    if (
        (a[0] === a[0].toLocaleLowerCase() && b[0] === b[0].toLocaleLowerCase()) ||
        (a[0] === a[0].toLocaleUpperCase() && b[0] === b[0].toLocaleUpperCase())
    ) {
        return a.localeCompare(b);
    }
    if (a[0] === a[0].toLocaleLowerCase()) {
        return -1;
    }
    return 1;
};

// topThreeWords(
//     'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of ' +
//         'those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. ' +
//         'An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a ' +
//         'pigeon or so extra on Sundays, made away with three-quarters of his income.'
// );

// ["a", "of", "on"]

// topThreeWords('  , e   .. ');
topThreeWords('a a c b b');
// topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e');
