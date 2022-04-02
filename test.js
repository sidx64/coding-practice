//'HELLO'
function compressor(myStr) {
  let myList = myStr.split('');
  let list = '',
    count = 1;
  for (let idx in myList) {
    if (myList[idx] === myList[parseInt(idx) + 1]) {
      count += 1;
    } else {
      list = list + myList[idx] + count;
      count = 1;
    }
  }
  console.log(list);
}

compressor('JIINNKEEEEESSSS');
