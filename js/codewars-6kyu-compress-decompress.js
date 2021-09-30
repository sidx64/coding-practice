var compress = function (str) {
    let strList = str.split(''),
        count = 1,
        flag = false;
    res = [];
    strList.forEach((letter, index) => {
        if (index !== 0) {
            if (strList[index] === strList[index - 1]) {
                count += 1;
            } else {
                res.push([count, strList[index - 1]]);
                count = 1;
            }
        }
        if (index === strList.length - 1) res.push([count, letter]);

        if (count > 1) flag = true;
    });
    if (flag) return JSON.stringify(res);
    else return '"' + str + '"';
};

var decompress = function (c) {};
console.log(compress('aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'));
console.log(compress('abcde'));
