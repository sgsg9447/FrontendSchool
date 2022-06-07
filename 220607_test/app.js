const time = document.querySelector(".time");
const startBtn = document.querySelector(".btn_start");
const resetBtn = document.querySelector(".btn_reset");
let minutes = 0;
let seconds = 0;
let milisec = 0;
let count = 0;
let timer;

function countTime() {
  if (startBtn.value == "시작") {
    startBtn.value = "중단";
    resetBtn.value = "reset";
    timer = setInterval(function () {
      count += 1;
      minutes = Math.floor(count / 6000);
      let remainer_1 = count % 6000;
      seconds = Math.floor(remainer_1 / 100);
      let remainer_2 = remainer_1 % 100;
      milisec = remainer_2;
      ClockPaint();
    }, 10);
  } else if (startBtn.value == "중단" && count != 0) {
    clearInterval(timer);
    startBtn.value = "시작";
    resetBtn.value = "재설정";
  }
}

function ClockPaint() {
  time.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }:${milisec < 10 ? "0" + milisec : milisec}`;
}

function init() {
  startBtn.addEventListener("click", countTime);
  resetBtn.addEventListener("click", HandleReset);
}

function HandleReset() {
  count = 0;
  minutes = 0;
  seconds = 0;
  milisec = 0;

  ClockPaint();
}

init();
