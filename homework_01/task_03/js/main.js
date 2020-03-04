
var btn1 = document.querySelector('.btn9');
btn1.addEventListener('click', function(){
    var arr = ['Targaryen ', 'Stark', 'Lannister', 'Baratheon', 'Greyjoy'];
    console.log('Полный массив - ' + arr)
    console.log('1) ' + arr[2])
    console.log('2) First element - ' + arr[0])
    console.log('3) Last element - ' +arr[arr.length-1])
    console.log('4) Del first element - '  + arr.shift())
    console.log('5) Del last element - ' + arr.pop())
    console.log('Массив после - ' + arr)
})

var btn2 = document.querySelector('.btn10');
btn2.addEventListener('click', function(){
    for (let i=1; i <= 100; i++){
        if(i%2 == 0){
            console.log(i)
        }
    }
})

var btn3 = document.querySelector('.btn11');
btn3.addEventListener('click', function(){
    var num = +prompt('Введите число:');
    if (num <=100 && num>=1){
        if(num%3 == 0 && num%5 == 0){
            console.log('fizzbuzz');
        }
        else if(num%3 == 0){
            console.log('fizz');
        }
        else if(num%5 == 0){
            console.log('buzz');
        }
        else{
            alert('Число не делится на 3 и на 5!')
        }
    }
    else{
        alert("Чилсло больше 100 или меньше 1!")
    }
})

var btn4 = document.querySelector('.btn12');
btn4.addEventListener('click', function(){
    var student = { name : 'David', sClass : 'VI', age: 12 };
    console.log(student.name)
})

var btn5 = document.querySelector('.btn13');
btn5.addEventListener('click', function(){
    var radius = +prompt('Введите радиус:');
    // var s = Math.PI * radius ** 2;
    // var с = 2 * Math.PI * radius;
    console.log(`Площадь круга - ${(Math.PI * radius ** 2).toFixed(2)} 
    \nОкружность круга - ${(2 * Math.PI * radius).toFixed(2)}`);
})


var btn6 = document.querySelector('.btn14');
btn6.addEventListener('click', function(){
    var str = prompt('Введите строку:')
    var mas = [];
    for (let x = 0; x < str.length; x++) {
        for (let y = x + 1; y <= str.length; y++) {
            mas.push(str.slice(x,y))
        }
    }
    alert(mas)
})
