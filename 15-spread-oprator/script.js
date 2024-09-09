let subArr1 = [1,2,3,4,5]
let subArr2 = [6,7,8,9,0]

let combinedArr = [...subArr1,...subArr2];

console.log(combinedArr);

const originalObj = {
    name: "Nayan",
    age: 22,
    city: "Ahmedabad"
  };
  
  const modifiedObj = { ...originalObj, city: "Mumbai" };
  
  console.log(originalObj);  
  console.log(modifiedObj); 


  function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  
  const result = sum(...numbers);
  
  console.log("sum is " + result); 