

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')


// const init = setInterval(()=> console.log(date.getMinutes()), 1000)

const init = setInterval(()=>{
    let date = new Date()
    let hoursDate = date.getHours()
    let minutesDate = date.getMinutes()
    let secondDate = date.getSeconds()
    // console.log(secondDate)
    hours.innerHTML=`
    ${hoursDate}`
    minutes.innerHTML=`
    ${minutesDate}`
    seconds.innerHTML=`
    ${secondDate}`

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand')
    const secondHand = document.querySelector('.second-hand')

    hourHand.style.rotate = minutesDate * .5+"deg"
    minuteHand.style.transform = `rotate(${minutesDate * 6}deg`;
    secondHand.style.transform = `rotate(${secondDate * 6}deg`;

},1000)