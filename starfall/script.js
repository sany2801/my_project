const wrap = document.querySelector('.wrapper')
const count = +
prompt('колл-во звёзд' , 400)
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
console.log(star())

for(i=0; i<=count;i++){
    // wrap.append('sdvfs')
    wrap.append(star())
}