"use strict";

// Код у суворому режимі
console.log("JavaScript is awesome!");
console.log(10);
const age1 = 20;
console.log(age1); // 20

const username = "Mango";
console.log(username); // "Mango"

let usernamem = "MMango";
console.log(usernamem); // "Mango"

usernamem = "Poly";
console.log(usernamem); // "Poly"

let usernamen;
console.log(usernamen); // undefined

usernamen = "NMango";
console.log(usernamen); // "Mango"
const fox = 100;
const row = 30;
const bok = fox - row;
console.log(bok);

const quantity = 17;
console.log(typeof quantity); // виведе "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"

let usernamet;
console.log(typeof usernamet); // виведе "undefined"

let status = null;
console.log(typeof status); // виведе "object"

const x = 8;
const y = 5;
console.log(x % y); // 3

let age = 25;
age += 3;
console.log(age); // 26

const usernamel = "Poly";
const messagel = "Welcome " + "Poly";
console.log(messagel);

console.log(Boolean(0)); // "5"
console.log(Boolean(true)); // "true"
console.log(Boolean(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const guestName1 = "Mango";
const roomNumber1 = 207;
const greeting1 =
  "Welcome " + guestName1 + ", your room number is " + roomNumber1 + "!";
console.log(greeting1); // "Welcome Mango, your room number is 207!"

const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12

const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'

const product1 = "Repair droid";
const lastElementIndex = product1.length - 1;
console.log(product1[lastElementIndex]); // 'd'

const product2 = "Repair droid";
console.log(product2[product2.length - 1]); // 'd'

const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false

console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false

// Добре, приведення типів не виконується
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// Погано, бо виконується неявне приведення рядків і булевого значення до числа
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

//Перетворення типів: числа
console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN

console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false

//Метод Number.parseInt()
console.log(Number.parseInt("5")); // 5
console.log(Number.parseInt("5.5")); // 5
console.log(Number.parseInt("5cm")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("cm5")); // NaN
console.log(Number.parseInt("")); // NaN
console.log(Number.parseInt("qweqwe")); // NaN

//Метод Number.parseFloat()
console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN

//Арифметичні функції
console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1

console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

console.log(Math.max(20, 10, 50, 40)); // 50

console.log(Math.min(20, 10, 50, 40)); // 10

console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

//Дробове число

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); //  ”5.00”
console.log((8.762195).toFixed(4)); //  “8.7622”

function doStuff() {
  // Тіло функції
  console.log("Log inside multiply function");
}
doStuff();

// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"

function multiply(x, y, z) {
  const product = x * y * z;
  // Повертаємо результат виразу множення
  //   return product;
  console.log(product);
}

// Результат роботи функції можна зберегти у змінну
const result = multiply(2, 3, 5);
console.log(result); // 30

function multiply(x, y, z) {
  return x * y * z;
}

const result1 = multiply(2, 3, 5);
console.log(result1); // 30

function multiply(x, y, z) {
  const product = x * y * z;
  return product;
}

const result2 = multiply(2, 3, 5);
console.log(result2);

function makeMessage(username) {
  console.log(`Hello ${username}`);
}

makeMessage("1");

function add(a, b, c) {
  return a + b + c;
}
const addc = add(2, 1, 1);
console.log(`this ${addc}`);

function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");
console.log("A");
function logStuff() {
  console.log("B");
}
console.log("C");
logStuff();

function foo() {
  // Локальна змінна
  const value = "I'm a local variable";

  console.log(value);
}
foo();

function makeMessage(name, price) {
  const value = `You picked ${name}, price per item is ${price} credits`;
  return value;
}
console.log(makeMessage("reter", "tre"));

function makeMessage(name, price) {
  // Повернення повідомлення про покупку
  return `You picked ${name}, price per item is ${price} credits`;
}

// Приклад виклику функції
console.log(makeMessage("Laptop", 1200)); // Виведе: You picked Laptop, price per item is 1200 credits

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}
console.log(calculateTotalPrice(25, 3));
