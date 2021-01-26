const yearsEl = document.getElementById('years')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
let goalDate
let titleOfTimer


function setData() {
    titleOfTimer = document.getElementById('titleOfTimer').value
     goalDate = document.getElementById('goalDate').value
}

function countdown() {
    document.getElementById('titleTimer').innerHTML = titleOfTimer
    const currentDate = new Date()
    const date = new Date(goalDate)

    const totalSeconds = (date - currentDate) / 1000
    const years = Math.floor(totalSeconds / 3600 / 24 / 365)
    const days = Math.floor(totalSeconds / 3600 / 24) - 365*years
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60


    yearsEl.innerHTML = years
    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)


}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown, 1000)