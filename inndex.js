// ЗАВДАННЯ 1 — масив об'єктів → масив імен

const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const names = fruts.map((fruit) => fruit.name);

console.log("=== Завдання 1 ===");
console.log(names); // ["Apple", "Tomat", "Cherry", "Orange"]

// ЗАВДАННЯ 2 — парні числа від 2 до 10 (for)

console.log("\n=== Завдання 2 ===");

for (let i = 2; i <= 10; i += 2) {
  console.log(i); // 2, 4, 6, 8, 10
}

// ЗАВДАННЯ 3

console.log("=== Завдання 3 ===");

let i = 0;

while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}

// ЗАВДАННЯ 4

console.log("=== Завдання 4 ===");

// У браузері — використовуй prompt():

let num;

do {
  num = prompt("Введіть число більше за 100:");

  if (num === "" || num === null) {
    console.log("Скасовано");
    break;
  }
} while (Number(num) <= 100);

if (num !== "" && num !== null) {
  console.log(`Введено: ${num}`);
}

// ЗАВДАННЯ 5

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

const totalAge = girls.reduce((sum, girl) => sum + girl.age, 0);
const avgAge = totalAge / girls.length;

console.log(" Завдання 5 ");
console.log(`Середній вік: ${avgAge}`); // 20.5
