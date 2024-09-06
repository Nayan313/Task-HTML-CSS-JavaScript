function hello() {
  return "Hello Nayan";
}
console.log(hello());

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 34));

function numberCheck(num) {
  if (num % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
numberCheck(5);

const mul = (a, b) => {
  return a * b;
};

console.log(mul(1, 4));
