/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  const newArr = s.split(" ").map((el) => el.length);
  console.log(newArr);
  return Math.min(...newArr);
}
