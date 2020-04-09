// username
let name = prompt(`Хай! Як тебе звати?`);
alert(`Приємно познайомитись, ${name}!`);

// dateOfBirth
let dateOfBirth = prompt(`Напиши рік твого народження?`,0);
alert(`Ого! Тобі ${2020-dateOfBirth}?`)

// Периметер квадрата
let cvadrat = prompt (`Давай пограєм? Напиши мені одну сторону квадрата,а я вирахую периметер...`,0)
alert(`Хммм це буде...${4*cvadrat}`)

// Площа круга
let radiusCirle = prompt (`Знайдемо площу круга? Напиши мені радіус...`,0)
const pi= 3.14;
alert(`Хммм це буде...${pi * radiusCirle * radiusCirle } `);

// Відстань між містами
let distance = prompt(`Куди хочеш поїхати і як це далеко?` ,0);
let time = prompt(`За скільки часу хочеш туди добратися?`,0);
alert(`Думаю тобі треба рухатись з такою швидістю ${distance / time}км/год`);

// Курс валют
let euro = prompt(`Напиши курс валюти на яку хочеш купити`,0);
let dollar = prompt(`А тут курс валюти яку продаєш`,0);
let money = prompt(`Скільки в тебе валюти яку ти продаєш`,0);
alert( `Думаю в тебе вийде...${dollar/euro*money}`);

// Флешка
let flashDrive=prompt(`Скільки Гб твоя флешка?`,0);
const gb=1024;
const file=820;
alert(`Думаю в тебе поміститься ${Math.floor(flashDrive*gb/file)}файлів по 820мб`);

// Шоколадки
let amountOfMoney=prompt(`Cкільки грошей ти маєш`,0);
let price=prompt(`Яка ціна шоколадки`,0);
const zd= (amountOfMoney/price);
alert(`Думаю ти отримаєш ${Math.floor(amountOfMoney/price)}шоколадок`);
alert(`Твоя здача...${amountOfMoney - (Math.floor(amountOfMoney/price)*price)}`);

// Число задом наперед
let number = 0, result = 0;
number = prompt(`Введіть трьохзначне число.`);
while (number > 0)
{   result = result * 10 + number % 10;
    number = Math.floor(number / 10);}
alert(`Твоє число задом наперед ${result}.`);

// Банк
let totalMoney = prompt (`Яка сума твого вкладу в банк (2місяці під 5% річних)?`,0)
const percent= (totalMoney/100)*5;
const monthPercent= (percent/12)*2;
alert(`Ви отримаєте ${monthPercent} грн`)
