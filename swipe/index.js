const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.line__slider');

let offset = 0;
prev.addEventListener('click',()=>{
    console.log('prev')
    offset--;
    slider.style.left= "0px"
})


next.addEventListener('click',()=>{
    console.log('next')
    slider.style.left= "-538px"
})