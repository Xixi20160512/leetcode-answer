/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let palindrome = 0;
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  while (x > palindrome) {
    palindrome = palindrome * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === palindrome || x === Math.floor(palindrome / 10);
};
// @lc code=end
