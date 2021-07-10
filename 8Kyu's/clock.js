/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

*/


function past(h, m, s){
    //#Happy Coding! ^_^
   let hour = (h * 60) * 60 * 1000
   let minute = (m *60) * 1000
   let seconds = s * 1000
    return hour+minute+seconds
  }
  