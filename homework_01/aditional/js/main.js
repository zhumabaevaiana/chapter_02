// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
//         console.log('fizzbuzz');
//     }
//     else if (i % 3 == 0) {
//         console.log('fizz');
//     }
//     else if (i % 5 == 0) {
//         console.log('buzz');
//     }
//     else if (i % 7 == 0) {
//         console.log('buzz');
//     }
//     else {
//         console.log(i);
//     }
// }


let arr = [1,0,2,3,4,0,0,0,5];
let arr1 = arr.filter(number => number != 0);
let arr2 = arr.filter(number => number === 0);
console.log(arr1 + ' ' + arr2);

