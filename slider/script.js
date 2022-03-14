let offset = 0
const sliderPrev = document.querySelector('.slider-previous')
const sliderNext = document.querySelector('.slider-next')
const sliderLine = document.querySelector('.slider-line')
const buttonNavigator = document.querySelector('.button-navigator')
const navigator = document.querySelector('.navigator')
const draw = (index)=>{
    offset =+ index;
    sliderLine.style.left = -offset + 'px';
  
}


const init = ()=>{
    buttonNavigator.addEventListener('click', (event)=>{
        
        btnId = event.target.id
        // console.log(btnClass)
        console.log(btnId)
        draw(btnId)
    })
    sliderPrev.addEventListener('click',()=>{
        draw(offset-600)
        if (offset < 0) {
            draw(3000);
        }
    })
    sliderNext.addEventListener('click',()=>{
        draw(offset+600)
        if(offset > 3000){
            draw(0)
        }
    })
}
if(offset = 0){

}
init()

// let menu = document.querySelectorAll('menu')
// console.log(menu)

// const init = ()=>{
//     menu.forEach((item)=>
//         item.classList.remove('active'))
//         this.classList.add('active')   
// }

// menu.forEach((item) =>
// item.addEventListener('click', init))