//Function for timer
const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');
const comment = document.querySelector('#comment');

function getRemainingTime (endtime) {


  const time = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return {
    'total': time,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days
  };
}

function initializeClock (endtime) {
  const updateInterval = setInterval(updateClock, 1000);

  function updateClock(){
    const remainTime = getRemainingTime(endtime);
    secondsSpan.innerHTML = ('0' + remainTime.seconds).slice(-2);
    minutesSpan.innerHTML = ('0' + remainTime.minutes).slice(-2);
    hoursSpan.innerHTML = ('0' + remainTime.hours).slice(-2);
    daysSpan.innerHTML = remainTime.days;

    if(remainTime <= 0) {
      clearInterval(updateInterval);
    }
  }
    updateClock();
}

//countdown starts when clicked
const button = document.querySelector('#button');
const input = document.querySelector('#input');

button.onclick = e => {
  e.preventDefault();
  const deadline = input.value;

  if(deadline == '') {
    comment.innerHTML = 'Please enter a date!';
  } else {
    initializeClock(deadline);
    button.classList.add('clicked');
    comment.innerHTML = '';
  }
}
