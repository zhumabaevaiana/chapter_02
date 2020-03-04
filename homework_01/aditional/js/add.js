var btn1 = document.querySelector('.add_btn1');
btn1.addEventListener('click', function(){
    var arr = [];
    for(let i=1; i<40; i++){
        if(i%3==0 || i%5==0 || i%7==0){
            arr.push(i)
        }
    }
    console.log('Массив - ' + arr);
})

var btn2 = document.querySelector('.add_btn2');
btn2.addEventListener('click', function(){
    var arr = [1,0,2,3,4,0,0,0,5]
    var arr2 = [];
    for( let i=0; i<arr.length;i++){
        if(arr[i]==0){
            arr2.push(arr[i]);
        }
        else{
            arr2.unshift(arr[i])
        }
    }
    console.log('Mассив - ' + arr)
    console.log('Упорядоченный массив - ' + arr2)
})

var btn3 = document.querySelector('.add_btn3');
btn3.addEventListener('click', function(){
    let arr = [1,0,2,3,4,0,0,0,5]

    let arr2 = arr.filter(val => val != 0)
    let arr3 = arr.filter(val => val == 0)

    console.log('Mассив - ' + arr)
    console.log('Без 0 - ' + arr2)
    console.log('С 0 - ' + arr3)
    console.log('Соедененый массив - ' + arr2.concat(arr3))
})