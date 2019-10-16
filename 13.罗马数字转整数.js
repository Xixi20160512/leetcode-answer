/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let number = 0;

  while (s.length > 0) {
    const [index1, index2] = s.split("");
    if (map[index2] && map[index1] < map[index2]) {
      number += map[index2] - map[index1];
      s = s.substr(2);
    } else {
      number += map[index1];
      s = s.substr(1);
    }
  }

  return number;
};
// @lc code=end
