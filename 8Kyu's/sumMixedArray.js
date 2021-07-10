/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x){
    const num = x.map(el => +el)
    console.log(num)
   return num.reduce((acc,val) => acc+val)
  }