function Stopwatch() {
    this.startTime = 0;
    this.currentTime = 0;
    this.isRunning = false;
    this.intervalId = null;
}

Stopwatch.prototype.start = function() {
    if (!this.isRunning) {
        this.startTime = Date.now() - this.currentTime; 
        this.isRunning = true;
        this.intervalId = setInterval(() => this.updateDisplay(), 1000);
    }
};

Stopwatch.prototype.stop = function() {
    if (this.isRunning) {
        clearInterval(this.intervalId);
        this.currentTime = Date.now() - this.startTime; 
        this.isRunning = false;
        this.updateDisplay();
    }
};

Stopwatch.prototype.updateDisplay = function() {
    if (this.isRunning) {
        this.currentTime = Date.now() - this.startTime;
    }
    const seconds = Math.floor(this.currentTime / 1000);
    const curTime = `Duration: ${seconds} seconds`;
    document.querySelector("#timeShow").textContent = curTime;
};

// Creating an instance of Stopwatch
const stopwatch = new Stopwatch();

function startWatch() {
    stopwatch.start();
}

function stopWatch() {
    stopwatch.stop();
}
