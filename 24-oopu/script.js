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

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.count); 

console.log(stack.pop());
console.log(stack.count); 

console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.pop()); 
