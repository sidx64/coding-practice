/* find least value of change that cannot be created using a list of provided coins */

function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  count = 0;
  for (index in coins) {
    if (coins[index] > count + 1) return count + 1;
    count += coins[index];
  }
  return count + 1;
}
