function returnCountry(arr) {                               /*15 - Страны*/
    let maxStr = arr[0];
    let minStr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxStr.length) {
            maxStr = arr[i];
        }
        if (arr[i].length < minStr.length) {
            minStr = arr[i];
        }
    }
    let arrOut = [`\n Max str -  ${maxStr} \n\nMin str - ${minStr}`];
    return arrOut.join(' ');
}

let btn15 = document.querySelector('.btn15');
btn15.addEventListener('click', function(){
    let mas = ['Japan','Kuba', 'Kygyzstan', 'England'];
    alert(returnCountry(mas));
})


//---------------------------------------------------------------------------------------------------------------

function charCount(str, ch) {                         /*16 - Подсчет букв*/
    let countCh = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]===ch) {
            countCh++;
        }
    }
    return countCh;
}
let btn16 = document.querySelector('.btn16');
btn16.addEventListener('click', function(){
    let str = prompt('Введите строку');
    let char = prompt('Введите символ');
    console.log('В строек ' + str + ' символ-' + char + ' всречается-' + charCount(str, char) + ' разa!');    
})

//-------------------------------------------------------------------------------------------------------------------

function factor(num) {                                 /*17 - Фактореал*/
    factorNum = 1;
    for (let i = 1; i <= num; i++) {
        factorNum *= i;
    }
    return factorNum;
}
let btn17 = document.querySelector('.btn17');
btn17.addEventListener('click', function(){
    let factorOut = +prompt('Введите число');
    alert(factor(factorOut));
})

//----------------------------------------------------------------------------------

function intNums(x, y) {                      /*18 - Диапозон*/
    let arr = [];
    for (let i = x; i <= y; i++) {
        arr.push(i);
    }
    return arr;
 }
 let btn18 = document.querySelector('.btn18');
 btn18.addEventListener('click', function(){
    let x = +prompt('Введите число начинаюший диапазон X');
    let y = +prompt('Введите число конца диапазона Y');
    alert(intNums(x, y));
 })



// let arr = [

//     ["a","b","c"],
//     ['d','e','f'],
//     ['g', 'h', 'i']
// ]

// // for (let i = 0; i < arr.length; i++){
// //     for (let j = 2; j < arr.length; j--){
// //         console.log(arr[i][j])
// //     }
// // }
// for (let i = 0, j = arr.length-(i+1); i < arr.length; i++, j--) {
//     console.log(arr[i][j])
// }
