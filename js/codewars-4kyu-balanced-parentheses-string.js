function balancedParensGenerator(n, k) {
  if (n === 0) return [''];
  if (n === 1) return ['()'];

  let stack = [];
  let result = [];

  function backTrack(openP, closeP) {
    if (openP === n && closeP === n) {
      result.push(stack.join(''));
      if (result.length >= k) return result;
    }

    if (openP < n) {
      stack.push('(');
      backTrack(openP + 1, closeP);
      stack.pop();
    }
    if (closeP < openP) {
      stack.push(')');
      backTrack(openP, closeP + 1);
      stack.pop();
    }
  }

  backTrack(0, 0);
  console.log(result);
  return result;
}

function balancedParens(n, k) {
  if (typeof k === 'BigInt') {
    k = Number(k);
    console.log(k);
  }
  k = Number(k);
  console.log(n, '-', k, '<-');
  let balancedList = balancedParensGenerator(n, k);

  let result = balancedList.length > k ? balancedList[k] : null;
  console.log(result);
  return result;
}

balancedParens(20, 0);
