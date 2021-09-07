/*

Create a function that takes a positive integer and returns the next bigger number that 
can be formed by rearranging its digits. For example:

nextBigger(12)   // returns 21
nextBigger(513)  // returns 531
nextBigger(2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1:

nextBigger(9)   // returns -1
nextBigger(111) // returns -1
nextBigger(531) // returns -1

2017

*/

function nextBigger(n) {
    //your code here

    let inputStr = n.toString().split('');

    // find the pivot, the point (from right) where i > i-1
    let pivot = -1;
    for (let i = inputStr.length - 1; i > 0; i--) {
        if (+inputStr[i] > +inputStr[i - 1]) {
            pivot = i - 1;
            break;
        }
    }

    if (pivot == -1) return pivot;

    let right = inputStr.splice(pivot);

    let pvt = right.splice(0, 1)[0];

    let mm = null,
        mmi = null;

    for (let i = 0; i < right.length; i++) {
        if (right[i] > pvt) {
            if (mm == null || right[i] < mm) {
                mm = right[i];
                mmi = i;
            }
        }
    }

    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(pvt);
    right = right.sort();

    let result = +inputStr.concat([mm]).concat(right).join('');
    if (result < n) return -1;
    console.log(result);
    return result;
}

nextBigger(12); // 21
nextBigger(513); // 531
nextBigger(531); // -1
nextBigger(2018); // 2081
nextBigger(13482); // 13842
