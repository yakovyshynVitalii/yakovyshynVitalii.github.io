// Завдання 1
let a = Number(prompt("Перше число"));
let b = Number(prompt("Друге число"));

function ex1_Function ( a , b){
    if (a > b){
    return -1 ;
    }else if(a < b){
        return 1 ;
    }
    else if( a == b){
        return 0 ;
    }
    
}
let c = ex1_Function (a , b) ;
console.log (c);


// Завдання 2

let number_factorial = Number(prompt(`Введіть число`))
function ex2_Function ( number_factorial){
    let factorial = 1;
    for (let i= 1; i <= number_factorial ; i++ ){
        factorial = i * factorial;
    }
    return factorial ;
}
console.log ( ex2_Function (number_factorial) );

// Завдання 3 
function ex3_function (){
    let ex3_number1 = prompt(`Введіть число`);
    let ex3_number2 = prompt(`Введіть число`);
    let ex3_number3 = prompt(`Введіть число`);  
    let result = ex3_number1 + ex3_number2 + ex3_number3 ;
    console.log (result); 
}
ex3_function();

// Завдання 4

let dovzyna = Number(prompt(`Число`));
let shyryna = Number(prompt(`Число`));

function ex4_function(x , y){
    let ploshcha = y? x * y : x * x ; 
    console.log(ploshcha);
}
ex4_function ( dovzyna , shyryna);




// Завдання 5 
let ex5_number1 = prompt(`Введіть число`);

function ex5_function (n) {
    let result = 0;
    for ( let i = 1; i <= (2*n-1); i++ ){
        if (i% 2 !=0){
            result = (i * i * i) + result;
        }
    }
  let idealne_number= (n*n) * ((2 * n * n) - 1); 
  return result === idealne_number? `Число ідеальне `: `Число не ідеальне`;
}
console.log (ex5_function (ex5_number1));

//Завдання 6 
