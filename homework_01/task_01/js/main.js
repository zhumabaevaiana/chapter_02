
var btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function(){
    console.log('Hello World')
});

var btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function(){
    var firstStr = 'Hello ';
    var secondStr = 'World';
    alert(firstStr + secondStr);
});

var btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', function(){
    var mass = ['number', 'string', 'bool', 'undefined', 'null', 'Symbol()', 'object']
    alert(mass.join())
});

var btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', function(){
    name = prompt("Введите имя:");
    pr = prompt('Введите профессию:');
    alert('Привет, ' + name + '! Ты работаеш ' + pr + '!')
});

var btn5 = document.querySelector('.btn5');
btn5.addEventListener('click', function(){
    var a = +prompt('Введите первое число:');
    var b = +prompt('Введите второе чило:');
    var s = a + b;
    var v = a - b;
    var u = a * b;
    var d = a / b;
    alert('Сумма-' + s + '   Разность-' + v + '   Произведение-' + u + '   Деление-' + d)
});

