class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return 'Stack is empty';
      }
      return this.items.pop();
    }
  
    get count() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.count); 
  console.log(stack.pop()); 
  console.log(stack.count); 
  