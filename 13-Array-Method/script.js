let arr = [23,23,45,23,45,1,2,4,78,69,54,60,35,62,1,5];

// acceding order
let ace = arr.sort((a,b)=> b - a);
console.log("acceding order " + ace);

// descending order
let des = arr.sort((a,b)=> a - b);
console.log("descending order " + des);


let words = ["hi", "my","name","is","nayan"];

let str= words.join(" ");
 console.log(str)
 console.log(typeof str)

 arr.forEach((item)=> {
    console.log(item);
 })