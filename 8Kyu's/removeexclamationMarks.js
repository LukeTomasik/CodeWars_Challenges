/*

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function removeExclamationMarks(s) {
  const newArr = [];
  s.split("").map((el) => (el === "!" ? "" : newArr.push(el)));
  return newArr.join("");
}
