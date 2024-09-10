class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            return "Stack is empty"; 
        }
        return this.items.pop();
    }

    get count() {
        return this.items.length;
    }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.count); 
console.log(myStack.pop()); 
console.log(myStack.count); 
console.log(myStack.pop()); 
console.log(myStack.pop()); 
console.log(myStack.pop()); 
