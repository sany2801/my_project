const wrap = document.querySelector('.wrapper')
const countValue = document.querySelector('.count_input')
const color = document.querySelector('.color_input')
const BTN_INIT = document.querySelector('.BTN_INIT')
const bg = document.querySelectorAll('.bg_input')
// color.addEventListener('click',()=>{
//    console.log(color.value) 
// })



const randomNum = (min, max) => {
    let num = Math.random() * (max - min) + min;
    return num;
};
const star = ()=>{
    const star = document.createElement('div')
    const line = document.createElement('div')
    const round = document.createElement('div')
    star.style.marginTop = `${randomNum(-200,-100)}%`
    star.style.left = `${randomNum(1,99)}%`
    star.style.transform = `scale(${randomNum(0,3)})`
    star.style.animationDelay = `${randomNum(1,40)}s`
    star.style.animationDuration = `${randomNum(3,10)}s`
    star.classList.add('star')
    line.classList.add('line')
    round.classList.add('round')
    star.append(line,round)
    return star;
}
const bg_Value = ()=>{
    for(i=0;i<bg.length;i++){
        if(bg[i].checked){
            break;
        }
    }
    return bg[i].id
}

const init = (count)=>{
    wrap.innerHTML= ``
    // document.body.style.backgroundImage = `url('img/${bg_Value()}.jpg')`;
    for(i=0; i<count;i++){
        wrap.append(star())
    }
}
init(600)

// BTN_INIT.addEventListener('click',()=>{


//     init(+countValue.value)
//     console.log(+countValue.value)
// })
