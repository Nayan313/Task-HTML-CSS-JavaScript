const delayFn = new Promise((a) => {
    setTimeout(() => {
      a('Promise resolved after 2 seconds');
    }, 2000);
  });
  
  delayFn.then((mes) => {
    console.log(mes);
  });
  

  const delayPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved after 2 seconds');
    }, 2000);
  });
  
  async function handlePromise() {
    const message = await delayPromise;
    console.log(message);
  }
  
  handlePromise();
  
  setTimeout(() => {
    console.log('Message after 1 seconds');
  }, 1000);
  
  const intervalId = setInterval(() => {
    console.log('Message logged every second');
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped logging every second');
  }, 5000);
  