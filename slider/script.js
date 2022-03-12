// const tittle = document.querySelector('.tittle')
// const sweet = document.querySelector('.menu')

// tittle.addEventListener('click', ()=>{
//     console.log('click')
//     sweet.classList.toggle('oppen')
// })

let offset = 0 // смещение от левого края
const slider = document.querySelector('.slider-line')
document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 600;
    if (offset > 3000) {
        offset = 0;
    }
    slider.style.left = -offset + 'px'
        
})

document.querySelector('.slider-previous').addEventListener('click', function(){
    offset = offset - 600;
    if (offset < 0) {
            offset = 3000;
    }
    slider.style.left = -offset + 'px'
        
})