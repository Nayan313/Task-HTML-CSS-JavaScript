function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

function greet(name = "name") {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Nayan"));
function combine(firstParam, secondParam, ...restParams) {
  console.log(`First: ${firstParam}`);
  console.log(`Second: ${secondParam}`);
  console.log(`Rest: ${restParams}`);
}

combine(1, 2, 3, 4, 5);
combine("a", "b", "c", "d");
