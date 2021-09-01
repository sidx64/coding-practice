/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
    if (a.length > 0 && b.length > 0) {
        b.forEach((item) => {
            result = a.filter((element) => {
                if (element !== item) return element;
            });
            a = result;
        });
        console.log(result);
        return result;
    } else if (b.length === 0) {
        return a;
    } else {
        return [];
    }
}

arrayDiff([1, 2, 2, 2, 3], [2]);
arrayDiff([3, 4], [3]);
arrayDiff([-17, -19, 20, 19, -11, -20], [-19, 20, -20, -11, -17]);
