// console.log('hello')
// console.log(firstName);

// var firstName = 'jack';

//Запись нескольких переменных после его объявлений (не стоит)
// let firstName = 'jack', lastName = 'johnson';
// console.log(firstName, lastName);

// Отличие var и let

//var хойстится, let не хойстится

// console.log(firstName); //undefind
// var firstName = 'jack';

// console.log(firstName); // Cannot access 'firstName' before initialization
// let firstName = 'jack';


// Объявление 2х let невозможно
// var firstName = 'jack';
// var firstName = 'jhon';
// console.log(firstName);

// let firstName = 'jack';
// let firstName = 'jhon';
// console.log(firstName); //Identifier 'firstName' has already been declared

// var firstName = 'jack';
// console.log(window.firstName);

// let firstName = 'jack';
// console.log(window.firstName);


// Переменная объялвения через const унаследовала все принципя,
// которые свойственный для переменной let, но с небольшими отличиями

// Переназначение let возможно
// let firstName = 'jack';
// console.log(firstName);

// firstName = 'john';
// console.log(firstName);

// Переназначение var невозможно Assignment to constant variable.
// const firstName = 'jack';
// console.log(firstName);

// firstName = 'john';
// console.log(firstName);

//Объекты

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ['John', 'Luci'],
//     clothes = {
//         shirt: 'black'
//     }
// }

// //Нестандартные значения ключей
// const notStandartFields = {
//     'kebab-case': 'i can use it',
//     '0': 10
// }

// // Доступ к свойствам объекта
// console.log(person.name);
// console.log(notStandartFields['kebab-case']);

//Переназначение свойств даже если это контент

// person.name = 'john';
// console.log(person);

//добавление свойства извне
// person.weight = '80kg';
// console.log(person);

//удаление поля из объекта
// delete person.name;
// console.log(person);

//массивы
// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

//Длина массива
// console.log(arrNums.length);

// // доступ к первому элементу массива
// console.log(arrNums[arrNums.length - 1]);

//Переназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);

// Оператор инкремент 
// let num = 0;
// num++
// num++
// console.log(num);

// let num = 0;
// console.log(++num);
// console.log(num);

//Циклы

//Циклы for
// for(let i = 0; i <= 100; i++) {
//     console.log('интерация №' + i);
// }

// const arrNums = [1,2,3,4,5];

// for (let i = 0; i <arrNums.length; i++) {
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);
// }

const arrNums = [1,2,3,4,5];

// for (let i = 0; i < arrNums.length; i++) {
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);
// }

//Поиск элемента в массиве цилом с условием
// let value = null;

// for (let i = 0; i <arrNums.length; i++) {
//     console.log(arrNums[i])
//     if (arrNums[i] === 4) value = arrNums[i];
// }

// console.log(value);

//Вытаскиваем все элементы больше 3х в отдельный массив 
// const arrNums2 = [1];

// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

// Цикл while 
// let i = 0;

// while (i < 10) {
//     console.log('интерация №' + i);
// }


// Цикл do while 
// let i = 0;

// do {
//     console.log('интерация №' + i);
// } while (false);

//Методы массива stage 1

const someFamily  = [
    {
        name: 'march',
        position: 'mother',
        age: 36
    },
    {
        name: 'homer',
        position: 'father',
        age: 46
    },
    {
        name: 'bart',
        position: 'son',
        age: 16
    },
    {
        name: 'lisa',
        position: 'daughter',
        age: 8
    }
]

//Метод push / pop
const newChild  = [
    {
        name: 'maggie',
        position: 'daughter',
        age: 2
    }
]

// console.log(newChild);
// someFamily.pop();
// console.log(someFamily);

//метод shift / unshift
// someFamily.shift();
// console.log(someFamily);

// someFamily.unshift(newChild);
// console.log(someFamily);

// someFamily.shift(newChild);
// console.log(someFamily);

//метод splice
// someFamily.splice(1, 1) //удаление
// console.log(someFamily);

// someFamily.splice(2, 0, newChild); //добавление
// console.log(someFamily);

//Узнать про метод slice

//жизнь без метода forEach

// const simpsonFamily = [];

// for (let i = 0; i < someFamily.length; i++) {
//     someFamily[i].lastName = 'simpson';
//     simpsonFamily.push(someFamily[i]);
// }

// console.log(someFamily)

// //жизнь с методом forEach

// someFamily.forEach(function(item) {
//     item.lastName = 'simpson';
//     simpsonFamily.push(iten);
// })
//   console.log(item);


//жизнь с методом map 
// const simpsonFamily = someFamily.map(function(item) {
//     item.lastNme = 'simpson';
//     return item;
// })

// console.log(someFamily)

// for (let x = 0; x < 10; x++) {
//     console.log(x, 'first cycle');
//     for (let y = 0; y < 3; y++) {
//         console.log(y, 'second cycle');
//     }
// }


