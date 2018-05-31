// My original plan has too much space and time complexity and I need to refactor this into hash Map. 


let x = ['1', '2', '3'];
let y = ['1', '3', '5'];

let z = x.filter(function(val) {
  return y.indexOf(val) != -1;
});

console.log(z);