const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.line__slider');

let offset = 1;
prev.addEventListener('click',()=>{
    console.log('prev')
    offset--;
    slider.style.left= "0px"
    console.log(offset)
    if(offset < 0){
        slider.style.left = '-1000px'
        offset = 1
    }
})


next.addEventListener('click',()=>{
    console.log('next')
    slider.style.left= "-538px"
})