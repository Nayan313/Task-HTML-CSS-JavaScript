let numArr = [23,23,45,23,45,1,2,4,78,69,54,60,35,62,1,5];

const evenNumbers = numArr.filter(number => number % 2 === 0);

console.log(evenNumbers); 

const DobNum = numArr.map((item) => {
    return item * 2;
})

console.log(DobNum)

const numSum = numArr.reduce((a,b)=> a + b);

console.log(numSum)