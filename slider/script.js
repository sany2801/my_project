

const prev = document.querySelector('#btn-prev'),
      next = document.querySelector('#btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(let slide of slides ){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(let dot of dots ){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlider=(ind)=>{
    activeSlide(ind)
    activeDot(ind)
}

const nextSlide = ()=>{
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlider(index)
    } else {
        index++;
        prepareCurrentSlider(index)

    }
}
const prevSlide = ()=>{
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlider(index)

    } else {
        index--;
        prepareCurrentSlider(index)
    }
}

dots.forEach((item, indexOn)=>{
    item.addEventListener('click', ()=>{
        index = indexOn
        prepareCurrentSlider(index)
    })
})
// next.addEventListener('click',nextSlide)
// prev.addEventListener('click',prevSlide)

const wripper = document.querySelector('.wrapper')

let x1 = null;

const mouseStart = (event)=>{
    x1 = event.clientX
}
function mousemove(event){
    if(!x1){
        return false;
    }
    let x2 = event.clientX
    let xDif = x2 - x1;
    if(xDif > 0){
        console.log('right')
    }else{
        console.log('left')
    }
}

wripper.addEventListener('mouseup', mousemove,false);
wripper.addEventListener('mousedown', mouseStart,false);
