/*

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

var countSheep = function (num) {
  //your code here
  let results = "";
  for (let i = 1; i <= num; i++) {
    results += i + " sheep...";
  }
  return results;
  console.log(results);
};
