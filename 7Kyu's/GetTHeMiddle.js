/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

function getMiddle(s) {
  //Code goes here!

  // store s.length
  // s.length % 2 === 0 - would make it even
  // once its even, we take the length / 2 and then minus 1 => then .slice(x,-x)
  // tt 4 -1 (3) TT

  // s.length % 2 !== 0 would make it odd, if its odd s.length + 1 /2 .slice (x,1)
  // testing 8 /2  (4) teste  5+1 6 / x= 3
  let num;
  if (s.length === 2) {
    return s.slice(1, 1);
  } else if (s.length === 1) {
    return s;
  } else if (s.length % 2 === 0) {
    num = s.length / 2 - 1;
    return s.slice(num, -num);
  } else {
    num = (s.length - 1) / 2;
    return s.slice(num, -num);
  }
}
