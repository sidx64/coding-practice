/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or 
more characters. The 1st character of a code is a capital letter which defines the book category. In the bookseller's 
stock-list each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity 
of books of this code in stock.

For example an extract of a stock-list could be:
L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.


You will be given a stock-list (e.g. : L) and a list of categories in capital letters e.g :
M = ["A", "B", "C", "W"] 

Your task is to find all the books of L with codes belonging to each category of M and to sum their quantity 
according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):
(A : 20) - (B : 114) - (C : 50) - (W : 0)

where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding 
to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning 
with W. If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note: In the result codes and their values are in the same order as in M.
*/

function stockList(listOfArt, listOfCat) {
    qtyList = new Array(listOfCat.length).fill(0);
    resultString = '';
    listOfCat.forEach((category, index) => {
        listOfArt.forEach((book) => {
            if (category.toUpperCase() === book.split('')[0].toUpperCase()) {
                let value = parseInt(book.split(' ')[1]);
                if (listOfCat.includes(category))
                    qtyList[listOfCat.indexOf(category)] += value;
            }
        });
        resultString += '(' + category + ' : ' + qtyList[index] + ')';
        if (index !== listOfCat.length - 1) {
            resultString += ' - ';
        }
    });

    if (qtyList.reduce((a, b) => a + b, 0) === 0) {
        return '';
    }
    // console.log(qtyList);
    // console.log(resultString);
    return resultString;
}

// Tests
stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']); // "(A : 200) - (B : 1140)"

stockList(
    ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'],
    ['A', 'B', 'C', 'W']
); // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
