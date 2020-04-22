// завдання 1

car = {
    manufacturer : 'Ford',
    model : 'mustang_gt',
    yaerOfIssue: 2018,
    averageSpeed: 100,
}

function myCar (){
 console.log (`car manufacturer ${car.manufacturer},
 model ${car.model},
 year of issue ${car.yaerOfIssue},
 average speed ${car.averageSpeed}.`);
}

myCar ();

function distance ( ){
    let distance = prompt (`дистанція`);
    let roadRemainder = distance % car.averageSpeed;
    let fullTime = (distance - roadRemainder) / car.averageSpeed;
    let timeOut = (fullTime - (fullTime % 4)) / 4;
    console.log(`${fullTime + timeOut} годин`);
}

distance ();


// ЗАвдання 2
obj1 = {
    numb1 : Number(prompt(`число`)),
    numb2 : Number(prompt(`число`)),
   }
   
   obj2 = {
       numb1 : Number(prompt(`число`)),
       numb2 : Number(prompt(`число`)),
      }

function add (){
let  x = (obj1.numb1 / obj1.numb2) + (obj2.numb1 / obj2.numb2);
 console.log (x)
}

function sub (){
    let x = (obj1.numb1 / obj1.numb2) - (obj2.numb1 / obj2.numb2);
    console.log(x)
}

function multip (){
    let x = (obj1.numb1 / obj1.numb2) * (obj2.numb1 / obj2.numb2);
    console.log(x)
}
function multip (){
    let x = (obj1.numb1 / obj1.numb2) * (obj2.numb1 / obj2.numb2);
    console.log(x)
}

function div (){
    let x = (obj1.numb1 / obj1.numb2) / (obj2.numb1 / obj2.numb2);
    console.log(x)
}
let Operation = prompt (`Оберіть перацію : додавання [1], віднімання [2], множення [3], ділення [4]`);
switch (Operation){
    case `1`:
        add ();
    break;

    case `2`:
        sub ();
    break;

    case `3`:
        multip();
    break;

    case `4`:
        div();
    break;
}



// Завдання 3
let myDate = new Date ();
ojk3 = {
    hours : myDate.getHours (),
    minutes : myDate.getMinutes (),
    sec : myDate.getSeconds ()
}


function time (){
    console.log (ojk3); 
}
 time   ();


function plusSeconds (){
    let inputSeconds = Number(prompt(`кількість seconds яку хочете добавити`));
    let result = ojk3.sec + inputSeconds;
    myDate.setSeconds (result);
    console.log (myDate);
}

function plusMinutes (){
    let inputMinutes = Number(prompt(`кількість minutes яку хочете добавити`));
    let result = ojk3.minutes + inputMinutes;
    myDate.setMinutes (result);
    console.log (myDate);
}
function plusHours (){
    let inputHours = Number(prompt(`кількість hours яку хочете добавити`));
    let result = ojk3.hours + inputHours;
    myDate.setHours (result);
    console.log (myDate);
}
 
let plusTime = prompt ( `Виберіть яку одиницю добавити: seconds[1], minutes[2], hours[3]`); 
switch (plusTime){
    case `1`:
        plusSeconds();
    break;

    case `2`:
        plusMinutes();
    break;

    case `3`:
        plusHours();
    break;
}


