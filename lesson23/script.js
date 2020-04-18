// Завдання 1

let firstnumber = Number(prompt("Підрахуй число в діапазоні. Від:"));
let secondnumber = Number(prompt ("Число до:"));
let counter = 0;
for (let i=firstnumber; i<secondnumber; i++){
    console.log (`Cумою всіх чисел буде ${counter += i}`)
};


// Завдання 2 

let number_2_1 = Number(prompt("//2 Запросить 2 числа и найти только наибольший общий делитель.' Перше:"));
let number_2_2 = Number(prompt("Друге:"));

while (number_2_1 != number_2_2){
    if (number_2_1 > number_2_2)
        number_2_1 = number_2_1 - number_2_2
else
    number_2_2 = number_2_2 - number_2_1;
console.log("наибольший общий делитель:", number_2_1);
};


// Завдання 3
let number = Number(prompt("Введіть число")); 
for (let i = 1; i<=number; i++){
 if (number % i == 0)
 console.log (`Відповідь`,i);
}

 // Завдання 4
let number_4 = prompt("'Введіть число");
let toArray = Array.from(number_4);
let countDigits = toArray.length;
console.log(' кількість цифр:', countDigits);

 // Завдання 5
 let x = (`10 -2 5 6 0 -7 3 -3 0 57`);
 let plus = 0;
 let minus = 0;
 let parni = 0;
 let neParni = 0;
 let nuliovi= 0;
 let y = x.split(" ");
 console.log (y);
 for ( let i = 0; i < 10; i++ ){
     if ( +y [i] > 0){
         plus ++; 
     }else if (+y [i]< 0){
         minus ++;
     }else if (+y [i] == 0){
         nuliovi++
     }
    (+y[i] %2 === 0)? parni++ : neParni++ ;
 }
 console.log ( plus , minus , parni , neParni , nuliovi);



//Завдання 6
let sixTusk;
do{
let number_1 = Number(prompt(`Введіть перше число`));
let number_2 = Number (prompt(`Введіть друге число`));
let Operator = prompt (`Operator`);
    if ( Operator == `+`){
        console.log(number_1 + number_2);
        alert(number_1+number_2);
    }else if ( Operator == `-`){
        console.log(number_1 - number_2);
        alert(number_1-number_2);
    }else if( Operator == `*`){
        console.log(number_1 * number_2);
        alert(number_1 * number_2);
    }else if(Operator == `/` ){
        console.log(number_1 / number_2);
        alert(number_1 / number_2);
    }
}while(sixTusk ==1);




// завдання 9
let i = 2;
while (i <= 9){
    console.log(`${i}*2 =`, i * 2);
    console.log(`${i}*3 =`, i * 3);
    console.log(`${i}*4 =`, i * 4);
    console.log(`${i}*5 =`, i * 5);
    console.log(`${i}*6 =`, i * 6);
    console.log(`${i}*7 =`, i * 7);
    console.log(`${i}*8 =`, i * 8);
    console.log(`${i}*9 =`, i * 9);
    console.log(`${i}*10 =`, i * 10);
    i++;
};

// Завдання 10 
a = 0;
b = 50;
c = 100;
let operation;
console.log (`Загадай число від 0 до 100`);
do{
    let result = prompt (`Число більше, менше чи дорівнює результату`,b)
    if (result ==`>`){
        a=b;
        b=b + Math.floor((c-b)/2);
        console.log (`Більше :`,b);
        operation = false;
    }else if ( result == `<`){
        c=b;
        b=b + Math.floor((a-b)/2);
        console. log (`Менше :`,b)
        operation = false;
    }else if (result == `=`){
        console.log (b)
        operation =true;
    }
} while (operation== false);