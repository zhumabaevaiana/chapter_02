// function declaration


// function square(a = 5,b = 5) {
//     console.log(a * b);
// }

// square(2,2);


// function checkArg(a,b) {
//     console.log(arguments);
// }

// checkArg('joh', 25)


// //retern
// function square(a,b) {
//     return a * b; //что хотим вызвать 
//     console.log('does not working'); //не работает после return
// }

// const firstResult = square(2,2);
// const secondResult = square(5,5);

// console.log(firstResult, secondResult); //возвращает результат

//example 1

// function lineShortener(str, chars = 8) {
//     let arr = [];
//     for(let i = 0; i < chars; i++) arr.push(str[i]);
//     console.log(arr.join('') + '...');
//     return arr.join('') + '...';
// }

// const longStr = 'it`s very long string';
// const shortStr = lineShortener(longStr);
// const secondShortStr = lineShortener('hello it`s me');

// console.log(shortStr, secondShortStr);


// examle 2
// function isEmptyArray(value) {
//     return Array.isArray(value) && value.length === 0; //диклорирование
// }

// console.log(isEmptyArray({name: 'jack'}));
// console.log(isEmptyArray([]));


//function EXPRESSION анонимная функция выдает ошибку лучше использовать

// const multiple = function(a,b) {
//     console.log(a * 2, b * 2);
// }

// multiple(3,6);


//методы объекта

// const person = {
//     name: 'jack',
//     birthYear: 1980,
//     getAge: function() {
//         console.log(this);
//         return 2020 - this.birthYear;
//     },
//     sayHello: function() { //желтнй метод
//         console.log(this.name + ' hello');
//     },
//     changeName: function(newName) {
//         if(typeof newName !== 'string') {
//             console.error('to change');
//             return;
//         }
//     }

// }

// const ageOfPerson = person.getAge(); //(метод)

// // console.log(ageOfPerson);
// person.sayHello();


//Области видимости функции


// function scope() { //локально
//     let firstNme = 'jack';
//     console.log(firstNme);
// }

// scope();





