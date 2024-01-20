const images = {
  img1: ['start.jpeg','abraham-isaac.jpeg','adam-eve.jpeg','daniel.jpeg','david.jpeg','elijah.jpeg','esau.jpeg','esther.jpeg','jonah.jpeg','joseph.jpeg','moses.jpeg','noah.jpeg','peter.jpeg','samson.jpeg','saul-paul.jpeg','solomon.jpeg']
}

const answerDisplayElements = document.getElementById('answer')
const answerImgEl = document.getElementById('answer__btn')
const nextElBtn = document.getElementById('next__btn')
const startBtn = document.getElementById('start__btn')
let updateCountDownInterval;
let selected__image;
let random__img=0

function next() {
      const startingMinutes = 10
      let time = startingMinutes * 60
      const countDownEl = document.getElementById('countdown__timer')
      document.getElementById('answer__btn').src = ``

  function updateCountDown() {
      let minutes = Math.floor(time / 600)
          minutes = minutes.toString().padStart(2, '0')
      
      let seconds = time % 60
          seconds = seconds.toString().padStart(2, '0')
          time--
      countDownEl.textContent = `${minutes}:${seconds}`
      if (seconds === '00' && minutes === '00') {
            clearInterval(updateCountDownInterval)
            document.getElementById('answer__btn').src = `./img/answer-img/${selected__image}`
          } 
  }

  function imageSlider() {
    // random__img = Math.floor(Math.random() * images.img1.length)
      const endDisplayEl = document.getElementById('end__el')
      const countDownEl = document.getElementById('countdown__timer')
      const startDisplayEl = document.getElementById('start__btn')
      random__img++
    selected__image = images.img1[random__img]
        updateCountDownInterval = setInterval(updateCountDown, 1000)
      if (random__img>=images.img1.length) {
            selected__image = images.img1[0]
            endDisplayEl.textContent = 'GAME OVER'
            countDownEl.innerHTML = ''
            startDisplayEl.textContent = ''
            nextElBtn.textContent = ''
            answerDisplayElements.textContent = ''
            clearInterval(updateCountDownInterval)
          }
    
      document.getElementById('img__question').src =`./img/question-img/${selected__image}` 
  
  }

  imageSlider();

  answerDisplayElements.addEventListener('click', function () {
      clearInterval(updateCountDownInterval)
      document.getElementById('answer__btn').src = `./img/answer-img/${selected__image}`
  })
    
}

nextElBtn.addEventListener('click', next);





// 