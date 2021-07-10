/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/
function findOdd(A) {
  //happy coding!
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] === A[i]) {
        count++;
      }
    }
    if (count % 2 !== 0) return A[i];
  }
}
