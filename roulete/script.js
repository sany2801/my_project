const allresult = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]

const random =()=>{
    const random = Math.round(Math.random() * (36 - 0) + 0);
    return random
}
let randomRes = random() 
// console.log(randomRes)


const roulette = document.querySelector('.roulette') //рулетка
const result = document.querySelector('.result')
const btnInit = document.querySelector('.run') //кнопка старта
const wrapperBall = document.querySelector('.wrapperBall')


const rotate2 = ()=>{
    let start = Date.now()
    let randomRes = random() 
    console.log(randomRes)
    let timer = setInterval(()=>{
        let timePas = Date.now() - start;
        // wrapperBall.style.transform = `rotate(${allresult.indexOf(index)*9.72}deg)`;
        wrapperBall.style.transform = `rotate(${((timePas/205)*allresult.indexOf(randomRes))}deg)`
        wrapperBall.style.transition = "ease-in-out"
        if(timePas > 2000) clearInterval(timer)
    },10)
    return randomRes
}

const rotate = ()=>{
    let start = Date.now()
    let timer = setInterval(()=>{
        let timePas = Date.now() - start;
        wrapperBall.style.transform = `rotate(${timePas/4}deg)`;
        if(timePas > 5760) clearInterval(timer)
        },1)    
        setTimeout(() => {
            rotate2()
          
        },5820); 
    }
    const init = ()=>{
        btnInit.addEventListener('click',()=>{
            rotate2()
            console.log('click')
        })
    }
    init()
    







const value = document.querySelectorAll('td')
const draw = ()=>{
    value.forEach((element)=>{
        let sum = []
        element.addEventListener('click',(element)=>{
            console.log(element.target.childNodes[1])
            sum.push(+naminalvalue)
            let result = sum.reduce(function(sum, item){
                return sum + item
            },0)
            element.target.innerHTML = ` 
            <p> ${element.target.id}
            <p class='active'>${+result}</p>`
        })
    })
}
draw()
 
 let naminalvalue = 1
 const naminals = document.querySelectorAll('.nam')
 const activeNaminal= (index)=>{
     for(let naminal of naminals){
         naminal.classList.remove('activeNum')
     }
     naminals[index].classList.add('activeNum')
}

naminals.forEach((element, index)=>{
    element.addEventListener('click',(el)=>{
        naminalvalue = +el.target.innerHTML
        activeNaminal(index)
    })
})
