const base = 60;
var clocktimer,
    dateObject,
    resultHours,
    resultMinutes,
    resultSeconds,
    milliSeconds;
var readout = '';
var hours = 1,
    minutes = 1,
    timerMinutes = 1,
    seconds = 0,
    timerSeconds = 0,
    milliSeconds = 0,
    init = 0;

function setClearClock() {
  clearTimeout(clocktimer);
  hours = 1;
  minutes = 1;
  timerMinutes = 1;
  seconds = 0;
  timerSeconds = 0;
  milliSeconds = 0;
  init = 0;
  readout = '00:00:00';
  document.myForm.stopwatch.value = readout;
}

function getStartTime() {
  var getDate = new Date();
  var time = (getDate.getTime() - dateObject.getTime()) - (seconds * 1000);
  if (time > 999) {
    seconds += 1;
  }
  if (seconds >= (minutes * base)) {
    timerSeconds = 0;
    minutes++;
  } else {
    timerSeconds = parseInt((milliSeconds / 100) + seconds);
    if (timerSeconds >= base) {
      timerSeconds = timerSeconds - ((minutes - 1) * base);
    }
  }
  if (minutes > (hours * base)) {
    timerMinutes = 1;
    hours++;
  } else {
    timerMinutes = parseInt((milliSeconds / 100) + minutes);
    if (timerMinutes >= base) {
      timerMinutes = timerMinutes - ((hours - 1) * base);
    }
  }
  milliSeconds = Math.round(time / 10);
  if (milliSeconds > 99) {
    milliSeconds = 0;
  }
  if (milliSeconds == 0) {
    milliSeconds = '00';
  }
  if (milliSeconds > 0 && milliSeconds <= 9) {
    milliSeconds = '0' + milliSeconds;
  }
  if (timerSeconds > 0) {
    resultSeconds = timerSeconds;
    if (timerSeconds < 10) {
      resultSeconds = '0' + timerSeconds;
    }
  } else {
    resultSeconds = '00';
  }
  resultMinutes = timerMinutes - 1;
  if (resultMinutes > 0) {
    if (resultMinutes < 10) {
      resultMinutes = '0' + resultMinutes;
    }
  } else {
    resultMinutes = '00';
  }
  resultHours = hours - 1;
  if (resultHours > 0) {
    if (resultHours < 10) {
      resultHours = '0' + resultHours;
    }
  } else {
    resultHours = '00';
  }
  document.myForm.stopwatch.value = resultHours + ':' + resultMinutes + ':' + resultSeconds;
  clocktimer = setTimeout("getStartTime()", 1);
}

function startTimer() {
  if (init == 0) {
    setClearClock();
    dateObject = new Date();
    getStartTime();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}
