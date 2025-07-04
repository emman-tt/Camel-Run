let player = document.getElementById('player')
let box = document.getElementById('background')
let html = document.getElementsByClassName('html')
let villain = document.getElementById('villain')
let cactus = document.getElementById('cactus')
let camel = document.getElementById('camel')
let night = document.getElementById('night')
let day = document.getElementById('day')
let score = document.getElementById('score')
let restart = document.getElementById('restart')
day.style.display = 'block'
night.style.display = 'none'
let info = document.querySelector('.info')
let overlay = document.getElementById('overlay')
let inGameScore = document.getElementById('inGameScore')
let inGameHighScore = document.getElementById('inGameHighScore')
let previousHighScore = 0
let inGameScoreNumber = 0
let final = 0
let realFinal = 0
let old = 0
let checkFinal = 0;
info.style.display = 'none'
overlay.style.display = 'none'

restart.addEventListener('click', () => {
  info.style.display = 'none'
  overlay.style.display = 'none'
  location.reload()
})

setInterval(() => {
  //Active day
  if ((day.style.display = 'block')) {
    night.style.display = 'block'
    inGameScore.style.color = 'white'
    day.style.display = 'none'
    box.style.background =
      'linear-gradient(to bottom,rgba(71, 67, 67, 0.85),rgb(0, 0, 0))'
  }
}, 20000)

//Active night
setInterval(() => {
  if ((night.style.display = 'block')) {
    night.style.display = 'none'
    day.style.display = 'block'
    inGameScore.style.color = 'white'
    // day.style.display = "none";
    box.style.background =
      'linear-gradient(to bottom, rgb(213, 213, 255), white)'
  }
}, 40000)

let isAlive = true

document.addEventListener('keydown', function (key) {
  if (key.code === 'Space') {
    player.classList.add('jump')
    setTimeout(() => {
      player.classList.remove('jump')
    }, 1100)
    return
  }
})
document.addEventListener('click', function () {
    player.classList.add('jump')
    setTimeout(() => {
      player.classList.remove('jump')
    }, 1100)
    return
  
})

setInterval(function () {
  let villainPosition = villain.getBoundingClientRect()
  let playerPosition = player.getBoundingClientRect()
  let villainLeft = Math.abs(Math.round(villainPosition.left))
  let villainRight = Math.abs(Math.round(villainPosition.right))
  let villainBottom = Math.abs(Math.round(villainPosition.bottom))
  let villainTop = Math.abs(Math.round(villainPosition.top))
  let playerLeft = Math.abs(Math.round(playerPosition.left))
  let playerTop = Math.abs(Math.round(playerPosition.top))
  let playerRight = Math.abs(Math.round(playerPosition.right))
  let playerBottom = Math.abs(Math.round(playerPosition.bottom))

  let camelPosition = camel.getBoundingClientRect()
  let cactusPosition = cactus.getBoundingClientRect()

  let camelLeft = Math.abs(Math.round(camelPosition.left))
  let camelRight = Math.abs(Math.round(camelPosition.right))
  let camelTop = Math.abs(Math.round(camelPosition.top))
  let camelBottom = Math.abs(Math.round(camelPosition.bottom))
  let cactusLeft = Math.abs(Math.round(cactusPosition.left))
  let cactusRight = Math.abs(Math.round(cactusPosition.right))
  let cactusBottom = Math.abs(Math.round(cactusPosition.bottom))
  let cactusTop = Math.abs(Math.round(cactusPosition.top))

  if (
    cactusLeft < camelRight &&
    cactusRight > camelLeft &&
    cactusBottom > camelTop &&
    cactusTop < camelBottom
  ) {

    villain.style.animationPlayState = 'paused'
    isAlive = false
    info.style.display = 'flex'
    overlay.style.display = 'block'
    inGameHighScore.textContent = 'High Score : ' + retrieve();

  }
}, 10)
let i = 0;
if (isAlive) {
  let interval = setInterval(() => {
    score.textContent = 'Score : ' + i;
    inGameScore.textContent = score.textContent;
   inGameHighScore.textContent = 'High Score : ' + retrieve(realFinal );  
    i++;

    if (!isAlive) {
      clearInterval(interval);
      
      final = i;
      realFinal = final - 1;
      checkFinal = retrieve(); // stored high score

      if (realFinal > checkFinal) {
        save();
      }

      
    }
  }, 70);
}


let inGameNewScoreNumber = 0

function save() {
    localStorage.setItem("realFinal", realFinal);
}

function retrieve() {
    // Retrieve and convert it to number
    return Number(localStorage.getItem("realFinal"));
}

function checker() {
    const storedFinal = retrieve();

    if (realFinal >= checkFinal) {
        save();
        
    } 
     else {
        // Optionally, use the stored value
        realFinal = storedFinal || 0; // Fallback to 0 if null
    }
}


