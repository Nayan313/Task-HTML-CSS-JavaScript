// conditional statement 

let age = 23;

if(age <= 12){
    console.log("you are under age")
}
else if(age > 12 && age <= 18){
console.log("you are teenager")
}
else if(age > 18 && age <= 90){
    console.log("you are adult")
}
else{
    console.log("enter valid age")
}

// print 1 to 10 using the for loop

for(let i=1; i<=10; i++){
    console.log(i)
}

// switch case
function signal(signal) {
    switch(signal) {
        case 'green':
            console.log("You can go");
            break;
        case 'yellow':
            console.log("Get ready to go");
            break;
        case 'red':
            console.log("You should stop");
            break;
        default:
            console.log("Wait for the signal");
            break;
    }
}

signal('green');
