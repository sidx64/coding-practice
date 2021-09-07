// const values = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
// ]);

const romanLookup = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

class RomanNumeral {
    toRoman(number) {
        var stack = [],
            romanKeys = Object.keys(romanLookup),
            current,
            index,
            count = 1;

        for (var numeral in romanLookup) {
            current = romanLookup[numeral];
            index = romanKeys.indexOf(numeral);

            while (number >= current) {
                if (count < 4) {
                    stack.push(numeral);
                } else {
                    if (stack.indexOf(romanKeys[index - 1]) > -1) {
                        stack.splice(stack.indexOf(romanKeys[index - 1]));
                        stack.push(romanKeys[index], romanKeys[index - 2]);
                    } else {
                        stack.splice(-3);
                        stack.push(romanKeys[index], romanKeys[index - 1]);
                    }
                }
                number -= current;
                count += 1;
            }
            count = 1;
        }
        return stack.join('');
    }
    fromRoman(string) {
        let result = 0,
            current,
            previous = 0;
        for (const char of string.split('').reverse()) {
            current = romanLookup[char];
            if (current >= previous) {
                result += current;
            } else {
                result -= current;
            }
            previous = current;
        }
        return result;
    }
}

RomanNumerals = new RomanNumeral();

console.log(RomanNumerals.fromRoman('XXI'));
console.log(RomanNumerals.toRoman(21));
