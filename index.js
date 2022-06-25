const oneHomeBtn = document.getElementById("home-one-point")
const twoHomeBtn = document.getElementById("home-two-point")
const threeHomeBtn = document.getElementById("home-three-point")

const oneGuestBtn = document.getElementById("guest-one-point")
const twoGuestBtn = document.getElementById("guest-two-point")
const threeGuestBtn = document.getElementById("guest-three-point")

const newBtn = document.getElementById("new-btn")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

// ......................Home....................

oneHomeBtn.addEventListener("click", function () {
    homeScore = homeScore + 1 
    homeScoreEl.textContent = homeScore
})

twoHomeBtn.addEventListener("click", function () {
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
})

threeHomeBtn.addEventListener("click", function () {
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
})

// .........................Guset....................

oneGuestBtn.addEventListener("click", function () {
    guestScore = guestScore + 1
    guestScoreEl.textContent = guestScore
})

twoGuestBtn.addEventListener("click", function () {
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
})

threeGuestBtn.addEventListener("click", function () {
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
})


newBtn.addEventListener("click", function(){
    console.log("a")
    homeScore = 0
    homeScoreEl.textContent = homeScore

    guestScore = 0
    guestScoreEl.textContent = guestScore
})