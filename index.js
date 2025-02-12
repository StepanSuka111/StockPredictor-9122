// Ось простий приклад обробки даних з використанням JavaScript. Цей код зчитує дані з масиву об'єктів, обробляє їх та виводить результат.

// Масив даних
const data = [
  { id: 1, name: 'John', age: 22, city: 'London' },
  { id: 2, name: 'Sarah', age: 27, city: 'Paris' },
  { id: 3, name: 'Mark', age: 30, city: 'New York' },
  { id: 4, name: 'Jane', age: 25, city: 'London' },
  { id: 5, name: 'Peter', age: 35, city: 'Paris' },
];

// Функція для отримання середнього віку
function getAverageAge(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].age;
  }
  return sum / data.length;
}

// Функція для отримання кількості людей в певному місті
function getCountInCity(data, city) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === city) {
      count++;
    }
  }
  return count;
}

// Функція для отримання найстаршої людини
function getOldestPerson(data) {
  let oldest = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].age > oldest.age) {
      oldest = data[i];
    }
  }
  return oldest;
}

// Використання функцій
const averageAge = getAverageAge(data);
console.log(`Average age: ${averageAge}`);

const countInLondon = getCountInCity(data, 'London');
console.log(`Number of people in London: ${countInLondon}`);

const oldestPerson = getOldestPerson(data);
console.log(`Oldest person: ${oldestPerson.name} (${oldestPerson.age} years old)`);

// Функція для фільтрації даних за віком
function filterByAge(data, age) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].age >= age) {
      result.push(data[i]);
    }
  }
  return result;
}

// Використання функції фільтрації
const aged25AndOver = filterByAge(data, 25);
console.log(`People aged 25 and over: ${JSON.stringify(aged25AndOver)}`);

// Функція для сортування даних за віком
function sortByAge(data) {
  let result = [...data];
  result.sort((a, b) => a.age - b.age);
  return result;
}

// Використання функції сортування
const sortedByAge = sortByAge(data);
console.log(`Data sorted by age: ${JSON.stringify(sortedByAge)}`);
