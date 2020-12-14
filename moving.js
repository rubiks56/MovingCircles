console.log('Javascript loaded')
let newCircle = document.getElementById('newCircle')
let scoreText = document.getElementById('scoreText')
let moveOn = 1
let points = []
let locationX = 750
let locationY = 350
let chime = new Audio();
let streakBrightness = 256
let score = 0
chime.src = "TouchedCircleChime.mp3";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor
  (max));
}
let randomCircleX = getRandomInt(1250)
let randomCircleY = getRandomInt(500)
function setup() {
    createCanvas(1500, 700);
  }





function newCircleLocation() {
  randomCircleX = getRandomInt(1250)
  randomCircleY = getRandomInt(500)
  }


  
function draw() {

  background(125)

  function circleStreak() {
    for (let i = 0; i < points.length - 1; i++) {
      stroke(256)
      circle(points[i].x, points[i].y, 10)
    }
  }
  function updateCircle() {
    circleStreak()
    fill('#47afff')
    stroke(256)
    strokeWeight(5)
    circle(locationX, locationY, 30)
    fill('#ff0000')
    stroke(0)
    strokeWeight(10)
    circle(randomCircleX, randomCircleY, 30)
    if (Math.abs(randomCircleX - locationX) <= 30) {
      if (Math.abs(randomCircleY - locationY) <= 30) {
        newCircleLocation()
        chime.play();
        score = score + 1
        scoreText.innerHTML = `Score: ${score}`
      }
    }

  }

  setInterval(updateCircle(), 10)

};


newCircle.addEventListener('click', newCircleLocation)
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) {
    console.log(`Left is pressed!`)
    locationX = locationX - 5
  }
  if (event.keyCode === 39) {
    console.log(`Right is pressed!`)
    locationX = locationX + 5
  }
  if (event.keyCode === 38) {
    console.log(`Up is pressed!`)
    locationY = locationY - 5
  }
  if (event.keyCode === 40) {
    console.log(`Down is pressed!`)
    locationY = locationY + 5
 }
  points.push({x: locationX, y: locationY}) 
  console.log(points)
})