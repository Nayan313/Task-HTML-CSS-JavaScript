function addNumbers(num1) {
    return num1 + num2;
  }
  
  try {
    const result = addNumbers(5);
    console.log(result);
  } catch (error) {
    console.log("Error occurred:");
  }
  

  let globalVar = "I am global!";

function testScope() {
  let functionVar = "I am inside a function!";
  
  if (true) {
    let blockVar = "I am inside a block!";
    console.log(blockVar);
  }
  
  console.log(globalVar);
  console.log(functionVar);
}

testScope();

console.log(globalVar);

const person = {
  name: "Nayan",
  age: 20,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

person.greet();
