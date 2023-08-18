"use strict";
let number = 2;

// First
// while(number <= 22){
//   console.log(number);
//   number++
// }

// Second
// do{
//   console.log(number)
//   number++
// }while(number <= 3)

// Third

// for (let i = 0; i <= 1; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 21; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 9; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i >= 99) {
    break;
  }
  console.log(i);
}
