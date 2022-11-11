let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home").textContent = scoreHome
document.getElementById("score-guest").textContent = scoreGuest

function plusOne() {
    scoreHome += 1
    document.getElementById("score-home").textContent = scoreHome
}

function plusTwo() {
    scoreHome += 2
    document.getElementById("score-home").textContent = scoreHome
}

function plusThree() {
    scoreHome += 3
    document.getElementById("score-home").textContent = scoreHome
}

function plusOneg() {
    scoreGuest += 1
    document.getElementById("score-guest").textContent = scoreGuest
}

function plusTwog() {
    scoreGuest += 2
    document.getElementById("score-guest").textContent = scoreGuest
}

function plusThreeg() {
    scoreGuest += 3
    document.getElementById("score-guest").textContent = scoreGuest
}