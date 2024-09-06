let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.length);

console.log(`the second element of arr before the change is ${arr[1]}`)
arr[1]= 100;
console.log(`the second element of arr afrer the change is ${arr[1]}`)

// push
arr.push(40);
console.log("after pushing element",arr)
// pop
arr.pop();
console.log("after pushing element",arr)
// shift
arr.shift(40);
console.log("after pushing element",arr)
// unshift
arr.unshift(32);
console.log("after pushing element",arr)