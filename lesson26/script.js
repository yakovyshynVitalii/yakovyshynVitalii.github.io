// // завдання 1

// car = {
//     manufacturer : 'Ford',
//     model : 'mustang_gt',
//     yaerOfIssue: 2018,
//     averageSpeed: 100,
// }

// function myCar (){
//  console.log (`car manufacturer ${car.manufacturer},
//  model ${car.model},
//  year of issue ${car.yaerOfIssue},
//  average speed ${car.averageSpeed}.`);
// }

// myCar ();

// function distance ( ){
//     let distance = prompt (`дистанція`);
//     let roadRemainder = distance % car.averageSpeed;
//     let fullTime = (distance - roadRemainder) / car.averageSpeed;
//     let timeOut = (fullTime - (fullTime % 4)) / 4;
    


//     console.log(`${fullTime + timeOut} годин`);
// }

// distance ();


// obj1 = {
//     numb1 : Number(prompt(`число`)),
//     numb2 : Number(prompt(`число`)),
//    }
   
//    obj2 = {
//        numb1 : Number(prompt(`число`)),
//        numb2 : Number(prompt(`число`)),
//       }

// function add (){
// let  x = (obj1.numb1 / obj1.numb2) + (obj2.numb1 / obj2.numb2);
//  console.log ()
// }

// add ();

let myDate = new Date ();
ojk3 = {
    hours : myDate.getHours (),
    minutes : myDate.getMinutes (),
    sec : myDate.getSeconds ()
}


function time1 (){
    console.log (ojk3); 
}
 time1();


function time2 (){
    let inputSeconds = Number(prompt(`seconds`));
    let result = ojk3.sec + inputSeconds;
    myDate.setSeconds (result);
    console.log (myDate);
}
 time2();


