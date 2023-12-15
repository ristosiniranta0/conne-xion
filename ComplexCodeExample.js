/*
Filename: ComplexCodeExample.js
Content: A complex JavaScript code example demonstrating various advanced programming concepts.

Note: This code does not have a specific purpose or functionality. It is aimed at showcasing the usage of different complex concepts in JavaScript programming.
*/

// Object representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}

const person1 = new Person("John", 25, "male");
console.log(person1.greet());
person1.celebrateBirthday();

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

console.log(isPrime(17));

// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 0)
    return 0;
  if (n === 1)
    return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// Class representing a 2D vector
class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  dotProduct(other) {
    return this.x * other.x + this.y * other.y;
  }

  static distance(vector1, vector2) {
    const dx = vector2.x - vector1.x;
    const dy = vector2.y - vector1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const vector1 = new Vector2(2, 3);
const vector2 = new Vector2(4, 1);
console.log(vector1.add(vector2));
console.log(vector1.dotProduct(vector2));
console.log(Vector2.distance(vector1, vector2));

// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Asynchronous function using promises and async/await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doAsyncWork() {
  console.log("Async work started.");
  await delay(2000);
  console.log("Async work completed.");
}

doAsyncWork();

// Module pattern to encapsulate private and public data
const myModule = (function() {
  let privateData = "This is private data.";

  function privateMethod() {
    console.log("This function is private and can only be accessed within the module.");
  }

  return {
    publicMethod: function() {
      console.log("This function is public and can be accessed outside the module.");
    },
    accessPrivateData: function() {
      console.log(privateData);
    }
  };
})();

myModule.publicMethod();
myModule.accessPrivateData();