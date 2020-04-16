// // Завдання 1

// let firstnumber = Number(prompt("Підрахуй число в діапазоні. Від:"));
// let secondnumber = Number(prompt ("Число до:"));
// let counter = 0;
// for (let i=firstnumber; i<secondnumber; i++){
//     console.log (`Cумою всіх чисел буде ${counter += i}`)
// };


// Завдання 2 

// let number_2_1 = Number(prompt("//2 Запросить 2 числа и найти только наибольший общий делитель.' Перше:"));
// let number_2_2 = Number(prompt("Друге:"));

// while (number_2_1 != number_2_2){
//     if (number_2_1 > number_2_2)
//         number_2_1 = number_2_1 - number_2_2
// else
//     number_2_2 = number_2_2 - number_2_1;
// console.log("наибольший общий делитель:", number_2_1);
// };


// // Завдання 3
// let number = Number(prompt("Введіть число")); 
// for (let i = 1; i<=number; i++){
//  if (number % i == 0)
//  console.log (`Відповідь`,i);
// }

// // Завдання 4
let number_4 = prompt("'Введіть число");
let toArray = Array.from(number_4);
let countDigits = toArray.length;
console.log(' кількість цифр:', countDigits);