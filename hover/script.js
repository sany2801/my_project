const round = document.querySelector('.round')
const wdth = round.offsetWidth;
let hght = round.offsetHeight;
console.log(round.offsetHeight)
console.log(round.offsetWidth)
console.log(round.style.height)
console.log(round.style.width)
const round3 = document.querySelector('.round3')
const round4 = document.querySelector('.round4')
const round5 = document.querySelector('.round5')
const round6 = document.querySelector('.round6')
const round7 = document.querySelector('.round7')

const wrp = document.querySelector('.wrapper')

round.addEventListener('click',()=>{
    wrp.innerHTML=`
    <div class="round" style="width: round.style.width; height:round.style.height"></div>
    
    `
});


