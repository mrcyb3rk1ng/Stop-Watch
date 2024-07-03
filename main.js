const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

function startTimer() {
  
  let munit = 0;
  let second = 0;
  
  let interval = setInterval(() => {
    
    timer.textContent = munit + ":" + second;
    
    if (munit < 10) {
      timer.textContent = `0${munit}:0${second}`;
      if (second >= 10) {
        timer.textContent = `0${munit}:${second}`;
      }
    }
    
    second++;
    
    if (second == 60) {
      munit++;
      second = 0;
    }
    
    stopBtn.addEventListener("click", () => {
      clearInterval(interval);
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
    });
    
  },1000);
}

startBtn.addEventListener("click",() => {
  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  startTimer();
});
