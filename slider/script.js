const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const dots = document.querySelectorAll('.dot')
const slides = document.querySelectorAll('.slider')
const slide = document.querySelector('.line-slider')
let offset = 0;
const init = (ind)=>{
    activeSlide(ind)
    activeDot(ind)
}
const activeDot = (index) =>{
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

const activeSlide = (index) =>{
    console.log(index)
    for(let slide of slides){
        slide.classList.remove('active-slide')
    }
    slides[index].classList.add('active-slide')
}

const nextSlide = () =>{
    if(offset == slides.length - 1){
        offset = 0
        init(offset)
    }else{
        offset++;
        init(offset)
    }
}
const prevSlide = () =>{
    if(offset == 0){
        offset = slides.length - 1
        init(offset)
    }else{
        offset--;
        init(offset)
    }
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click',()=>{
        offset = indexDot;
        init(offset)
    })
})
next.addEventListener('click',nextSlide)
prev.addEventListener('click',prevSlide)

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

// setInterval(nextSlide, 2500

let x = null;

const mouseStart = (event) =>{
    x1 = event.clientX
}
const mouseMove = (event) =>{
    if(!x1){
        return false;
    }
    let x2 = event.clientX
    let xDif = x2 - x1;
    if(xDif > 0){
        console.log('right')
        prevSlide()
    }else{
        console.log('left')
        nextSlide()
    }
}
slide.addEventListener('mouseup', mouseMove, false)
slide.addEventListener('mousedown', mouseStart, false)

// wripper.addEventListener('mouseup', mousemove,false);
// wripper.addEventListener('mousedown', mouseStart,false);
