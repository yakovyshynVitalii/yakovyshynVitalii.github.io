// Завдання 1
let age = prompt (`Скільки вам років`,0);
if (age >=0 && age <12){
    alert(`Дитина`);
}
else if(age >=12 && age < 18 ){
    alert(`Підліток`);
}
else if (age >=18 && age < 60){
    alert(`Дорослий`);
}
else if (age >=60){
    alert (`Пенсіонер`);
};

// Завдання 2
let number = prompt (`Введіть число від 0-9`,"");
switch (Number(number)) {
    case 0:
        alert(`)`);
        break;
    case 1:
        alert(`!`);
        break;
    case 2:
        alert(`@`);
        break;
    case 3:
        alert(`#`);
        break;
    case 4:
        alert(`$`);
        break;
    case 5:
        alert(`%`);
        break;
    case 6:
        alert(`^`);
        break; 
    case 7:
        alert(`&`);
        break;
    case 8:
        alert(`*`);
        break;
    case 9:
        alert(`(`);
        break;
};

// Завдання 3
let threeNumb = prompt (`Введіть трьохзначне число ` ,0);

if (threeNumb[0] == threeNumb[1] && threeNumb[1] == threeNumb[2]){
    alert (`всі числа одинакові`);
} else if (threeNumb[0] == threeNumb[1]){
    alert (`перше та друге числа - одинакові`);
} else if (threeNumb[1] == threeNumb[2]){
    alert (`друге та третє числа - одинакові`);
} else if (threeNumb[0] == threeNumb[2]){
    alert (`перше та третє числа - одинакові`);
} else { 
    alert (`жодне число не співпало`);
}

// Завдання 4
let year = prompt (`Пропишіть рік і ми перевіримо чи він високосний`)
if (year % 400 == 0){
    alert (`Рік високосний`);
}else if ((year % 4 == 0) && (year % 100 !==0)) { 
    alert (`Рік високосний`);
}else{
    alert (`Рік не високосний`);
}

// Завдання 5
let firstNumer = prompt (`Напишіть п'ятизначне число і ми перевіримо чи воно палиндром`)
if (firstNumer[0]==firstNumer[4] && firstNumer[1]==firstNumer[3]){
    alert (`Число є паліндромом`)
}else{
    alert (`Число не є паліндромом`)
}

// Завдання 6

const eur = 0.90
const uan = 27.50
const azn = 1.6
let usd = prompt (`Яку суму ви хочете поміняти?`,0);
let money = Number(prompt (`На яку валюту ви хочете змінити eur[1], uan[2], azn[3]`));
switch (money){
    case 1:
        alert (`Ви отримаєте ${eur * usd} євро`);
    break;
    case 2:
        alert (`Ви отримаєте ${uan * usd} гривень`);
    break;
    case 3:
        alert (`Ви отримаєте ${azn * usd} Айзербайжанських монет`);
    break;
}

// Завдання 7

let purchase = prompt(`Введіть суму покупки`,0);
if ( purchase  >=200 && purchase <=300 ){
    alert (`Ви отримали знижку 3% тому оплата буде ${Math.floor(purchase / 1.03) }`);
}else if (purchase >300 && purchase <=500){
    alert (`Ви отримали знижку 5% тому оплата буде ${Math.floor(purchase / 1.05) }`);
}else if (purchase >500){
    alert (`Ви отримали знижку 5% тому оплата буде ${Math.floor(purchase / 1.07) }`);
}else{
    alert (`Ви не отримали знижку тому оплата буде ${purchase}` );
}

// Завдання 8
let square = Number(prompt (`Пропиши периметр квадрату`,0));
let radius = Number(prompt (`Пропишіть радіус кола`,0));
if (square > radius ){
    alert (`Коло поміститься в квадрат`);
}else{
  alert(`Ой коло не поміщається в квадрат`);  
}

// Завдання 9
const firstguestion = Number(prompt (`"10-2=" "Відповідь 5 [1]","Відповідь 8 [2]","Відповідь 9 [3]"`));
const secondguestion = Number(prompt (`"10*2=" "Відповідь 20 [1]","Відповідь 30 [2]","Відповідь 40 [3]"`));
const thirdguestion = Number(prompt (`"5 Президент України" "Відповідь Зеленський [1]","Відповідь Янукович [2]","Відповідь Порошенко [3]"`));
let answers=0;
switch(firstguestion){
    case 1:
        
    break
    
    case 2:
        answers += 2;
    break

    case 3:

    break
}

switch(secondguestion){
    case 1:
        answers += 2;
    break
    
    case 2:
        
    break

    case 3:

    break
}

switch(thirdguestion){
    case 1:
        
    break
    
    case 2:
        
    break

    case 3:
        answers += 2;
    break
}
alert (`Ти набрав ${answers}/6`);

// Завдання 10
const setYear = Number(prompt(`Set the Year:`));
const setMounth = Number(prompt(`Set the Mounth from 1 to 12:`));
const SetDay = Number(prompt(`Set the day in your mounth:`));
let d = new Date();
d.setFullYear(setYear, (setMounth - 1), SetDay);
alert(`${d}`);
