/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F


*/

function abbrevName(name) {
  // code awa
  let newName = name.split(" ");
  let firstLetterName = newName[0].charAt(0).toUpperCase();
  let secondLetterName = newName[1].charAt(0).toUpperCase();
  return `${firstLetterName}.${secondLetterName}`;
  //     return name[name.indexOf("",3)]
  //     return name[name.indexOf('')]
}
