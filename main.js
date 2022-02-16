console.log(typeof("салат"));
// Предположение: String
// Фактический: String

console.log(typeof(9));
// Предположение: number
// Фактический: number

console.log(typeof(1.2));
// Предположение: number
// Фактический: number

console.log(typeof(NaN));
// Предположение: number
// Фактический: number

console.log(typeof("Hello World"));
// Предположение: String
// Фактический: String

console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean

console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы");
// Предположение: NaN
// Фактический: NaN

console.log("2" + "4");
// Предположение: 24
// Фактический: 24

console.log("2" - "4");
// Предположение: -2
// Фактический: -2

console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5);
// Предположение: NaN
// Фактический: NaN

console.log(99 * "шары");
// Предположение: NaN
// Фактический: NaN

let a;
let b;
let P;
let S;
let k;

a = 2;
b = 3;
P = a*2 + b*2;
S = a*b;
k = P/S;
console.log(`${a} ${b}`);
console.log(P);
console.log(S);
console.log(k);

let C1 = 25;
let F1 = C1*1.8 + 32;

let F2 = 66.2;
let C2 = (F2-32)/1.8;

console.log (`${C1}\xB0C соответсвует ${F1}\xB0F`);
console.log (`${F2}\xB0F соответсвует ${C2}\xB0C`);



let year = prompt('Какой сейчас год?', 2022);
let message  = (year % 4 == 0) ? `Високосный год!`:`Обычный год!`;
alert (message);



let chislo_1 = prompt('Введите первое число')
let chislo_2 = prompt('Введите второе число');

if(Number(chislo_1) + Number(chislo_2) == 10 || chislo_1 == 10 || chislo_2 == 10)
{
    alert('True');
}
else
{
    alert('False');
}


let sheep_counter = prompt('Сколько овец?');

for(let i = 1; i <= sheep_counter; i++)
{
    console.log(`${i} овечка....`);
}



for(let i = 1; i <= 15; i++)
{
    if(i % 2 == 0)  console.log(`${i} чётное`);
    if(i % 2 != 0)  console.log(`${i} нечётное`);
}


for(let i = 1; i <= 15; i++)
{
    if(i % 2 == 0)  console.log('#'.repeat(i));
    if(i % 2 != 0)  console.log('*'.repeat(i));
}



let array = [0, -3, 1];
console.log(array);
console.log(array.sort());


let array_max = [2, -1, 0, -5, -4];
console.log(Math.max.apply(null, array_max));
