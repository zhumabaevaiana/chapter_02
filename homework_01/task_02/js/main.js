
var btn1 = document.querySelector('.btn6')
btn1.addEventListener('click', function(){
    var age = prompt('Введите ваш возраст:');
    if(age >=1 && age <= 13){
        alert('Shrek');
    }else if(age >=14 && age <= 17){
        alert('Jumanji');
    }else if(age>= 18){
        alert('South park')
    }
    else {
        alert('Введите правильный возраст!')
    }
})

var btn2 = document.querySelector('.btn7')
btn2.addEventListener('click', function(){
    var drink = prompt('Введите ваш напиток:')
    switch(drink){
        case 'beer' || 'vodka':
            alert('Алькоголь очень вреден для вашего здаровья!')
        break;
        case 'coffee':
            alert('Кофен очень вреден для вашего здаровья!')
        break;
        case 'milk':
            alert('Поздравляю!!! Вы выбрали полезный напиток')
        break;
        default: alert('Такого напитка пока нету.')
    } 
})

var btn3 = document.querySelector('.btn8')
btn3.addEventListener('click', function(){
    var prunings = {
       p1: '(2<3)&&(3>4)||true',
       p11: 'true&&false||true',
       p12: 'false||true',
       p13: 'true',

       p2: '!true && (!true || 100 != 5*5)',
       p21: '!true && (!true || true)',
       p22: '!true && (true)',
       p23: 'false',

       p3: '("123" == 123) || ((10<=10) && ("" ===false))',
       p31: 'true || (true && false)',
       p32: 'true || false',
       p33: 'true'
       
    }
    console.log(prunings.p1)
    console.log(prunings.p11)
    console.log(prunings.p12)
    console.log(prunings.p13)
    console.log(' ')
    console.log(prunings.p2)
    console.log(prunings.p21)
    console.log(prunings.p22)
    console.log(prunings.p23)
    console.log(' ')
    console.log(prunings.p3)
    console.log(prunings.p31)
    console.log(prunings.p32)
    console.log(prunings.p33)
})