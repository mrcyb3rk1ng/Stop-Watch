const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

function startTimer() {
  
  let munit = 0;
  let second = 0;
  let milisec = 0;
  
  let interval = setInterval(() => {
    
    const disMunit = munit < 10 ? "0" + munit : munit;
    const disSecond = second < 10 ? "0" + second : second;
    const disMiliSecond = milisec < 10 ? "0" + milisec : milisec;
    
    timer.textContent = disMunit + ":" + disSecond + ":" + disMiliSecond;
    
    milisec++;
    
    if (milisec == 100) {
      second++;
      milisec = 0;
    } if (second == 60) {
      munit++;
      second = 0;
    }
    
    stopBtn.addEventListener("click", () => {
      clearInterval(interval);
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
    });
    
  },10);
}

startBtn.addEventListener("click",() => {
  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  startTimer();
});
