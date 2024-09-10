class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.currentTime = 0;
        this.isRunning = false;
        this.intervalId = null;
    }

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.currentTime; 
            this.isRunning = true;
            this.intervalId = setInterval(() => this.updateDisplay(), 1000);
        }
    }

    stop() {
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.currentTime = Date.now() - this.startTime; 
            this.isRunning = false;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        if (this.isRunning) {
            this.currentTime = Date.now() - this.startTime;
        }
        const seconds = Math.floor(this.currentTime / 1000);
        const curTime = `Duration: ${seconds} seconds`;
        document.querySelector("#timeShow").textContent = curTime;
    }
}

const stopwatch = new Stopwatch();

function startWatch() {
    stopwatch.start();
}

function stopWatch() {
    stopwatch.stop();
}
