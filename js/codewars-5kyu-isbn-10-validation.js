/*

ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can \
be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10

This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

Examples

1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false

*/

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.

    validation = true;

    // Check for valid string
    // String needs to be [[0-9]x9 + 0-9 or X]

    let re = /^[0-9]{9}([0-9]|X)?$/;
    if (re.test(isbn)) {
        testString = isbn
            .toUpperCase()
            .split('')
            .map((item, index) => {
                if (item === 'X' && index === 9) return 10 * 10;
                return item * (index + 1);
            });

        if (testString.reduce((a, b) => a + b, 0) % 11 !== 0) {
            validation = false;
        }
    } else {
        validation = false;
    }

    return validation;
}

const sampleTests = [
    '1112223331', //true
    '1112223339', //true
    '048665088X', //true
    '1293000000', //true
    '1234554321', //true
    '1234512345', //false
    '1293', //false
    'X123456788', // false
    'ABCDEFGHIJ', // false
    'XXXXXXXXXX', // false
    '048665088XZ', // false
];

sampleTests.forEach((sample) => {
    validISBN10(sample);
});
