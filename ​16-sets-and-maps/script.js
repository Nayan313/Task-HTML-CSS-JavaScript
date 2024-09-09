const arr = [1,2,3,4,5,6,7,6,5,4,3,4,3,4]
const uniqueNumbers = new Set(arr);

uniqueNumbers.add(6);
uniqueNumbers.delete(3);

console.log(uniqueNumbers.has(2)); 
console.log(uniqueNumbers.has(3)); 
console.log(uniqueNumbers); 


// map

const myMap = new Map();

myMap.set('name', 'Nayan');
myMap.set('age', 20);
myMap.set('city', 'Ahmedabad');

console.log(myMap.get('name')); 

myMap.delete('age');

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
