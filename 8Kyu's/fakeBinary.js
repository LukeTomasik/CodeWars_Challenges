/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

function fakeBin(x) {
  let numArr = x.split("").map((x) => {
    if (+x >= 5) {
      return "1";
    } else {
      return "0";
    }
  });
  console.log(numArr);

  return numArr.join("");
}
