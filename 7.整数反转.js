/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = x.toString();
  let active = true;
  let numberArr = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "-") {
      active = false;
    } else {
      numberArr.push(element);
    }
  }
  numberArr = numberArr.reverse();
  const expectNumber = numberArr.reduce(
    (val1, val2) => val1 + val2,
    active ? "" : "-"
  );
  if (
    -Math.pow(2, 31) < Number(expectNumber) &&
    Number(expectNumber) <= Math.pow(2, 31) - 1
  ) {
    return expectNumber;
  }
  return 0;
};
// @lc code=end
