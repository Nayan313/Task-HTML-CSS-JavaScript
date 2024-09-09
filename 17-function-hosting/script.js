function fn() {
    console.log("Hello from the function 1!");
  }
  
  fn();

  const fn2 = function() {
    console.log("Hello from the function 2!");
  };
  
  fn2(); 

  function fn3() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  fn3(1, 'a', 2, 'b',21,24,'ferre'); 
  

  function fn4(...args) {
    let sum = 0;
    for (let arg of args) {
      sum += arg;
    }
    return sum;
  }
  
  console.log(fn4(1, 2, 3, 4, 5)); 