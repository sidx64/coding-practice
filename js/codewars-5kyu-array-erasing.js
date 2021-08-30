/*
Task

You are given an sequence of zeros and ones. With each operation you are allowed to remove consecutive equal elements, however you may only 
remove single elements if no more groups of consecutive elements remain. How many operations will it take to remove all of the elements from 
the given sequence?

Example
For arr = [0, 1, 1, 1, 0], the result should be 2.
It can be cleared in two steps:
[0, 1, 1, 1, 0] -> [0, 0] -> [].

For arr = [0, 1, 0, 0, 0], the result should be 3.
It can be cleared in three steps:
[0, 1, 0, 0, 0] -> [0, 1] -> [0] -> []

Note that you can not remove 1 at the first step, because you cannot remove just one element while there are still groups of 
consecutive elements (see the rule above ^_^)

Input
An array arr of 0s and 1s.
1 <= arr.length <= 100

Output
The minimum number (integer) of operations.
*/

function reCalculate(arr) {
  let arrList = [],
    totalOneGroups = 0,
    totalZeroGroups = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arrList.push([arr[i]]);
      arr[i] === 0 ? totalZeroGroups++ : totalOneGroups++;
    } else {
      if (arr[i] === arrList[arrList.length - 1][0]) {
        arrList[arrList.length - 1].push(arr[i]);
      } else {
        arrList.push([arr[i]]);
        arr[i] === 0 ? totalZeroGroups++ : totalOneGroups++;
      }
    }
  }

  return [arrList, totalZeroGroups, totalOneGroups];
}

function arrayErasing(arr) {
  console.log(arr);
  stepCount = 0;
  let arrList = [];

  while (arr.length) {
    [arrList, totalZeroGroups, totalOneGroups] = reCalculate(arr);

    let targetBinary = totalZeroGroups > totalOneGroups ? 1 : 0;

    console.log('Calculated Grouping', arrList);
    groupedElementsExist = false;

    console.log('Target -> ', targetBinary);

    for (let i = 0; i < arrList.length; i++) {
      console.log('Arr Item Length -> ' + arrList[i].length);
      console.log('Arr Items -> ' + arrList[i]);
      if (arrList[i].length > 1 && arrList[i][0] === targetBinary) {
        groupedElementsExist = true;
        stepCount++;
        arr.splice(arr.indexOf(targetBinary), arrList[i].length);
        console.log('Arr after splicing', arr);
        console.log('breaking FOR');
        break;
      }
    }
    if (!groupedElementsExist) {
      console.log('removing single element');
      let noTargets = true;
      for (let i = 0; i < arrList.length; i++) {
        if (arrList[i][0] === targetBinary) {
          arr.splice(arr.indexOf(targetBinary), arrList[i].length);
          stepCount++;
          noTargets = false;
          break;
        }
      }
      if (noTargets) {
        arr.shift();
        stepCount++;
      }
    }
  }

  console.log('Steps -> ' + stepCount);

  //   for (arrItem in arrList) {
  //     let weightedList = [];
  //     weightedList.push([arrList[arrItem][0], arrList[arrItem].length]);
  //   }

  //   console.log(weightedList);

  //   totalMinSteps = Math.min(totalZeroGroups, totalOneGroups) + 1;
  //   console.log(totalMinSteps);
  //   return totalMinSteps;
}

arrayErasing([1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1]); // 3
// arrayErasing([1, 1, 1, 1]); // 1
// arrayErasing([0, 1, 1, 1, 0]); // 2
// arrayErasing([0, 1]); // 2
// arrayErasing([1, 0, 1, 0]); // 3
// arrayErasing([1, 1, 0, 0, 1, 1, 0]); // 3
// arrayErasing([0, 0, 1, 0, 0, 1, 1, 0, 0]); // 3
// arrayErasing([1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]); // 3
// arrayErasing([0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]); // 3
// arrayErasing([1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1]); //, 3);
// arrayErasing([1, 0, 1, 0, 1, 0, 0, 1]); // 5
// arrayErasing([0, 0, 0, 1, 0, 0]); // 3
// arrayErasing([1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1]); // 6
