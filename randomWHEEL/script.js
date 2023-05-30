const arow = document.querySelector('.arrow')




const rotate2 = ()=>{
    let start = Date.now()
    let timer = setInterval(()=>{
        let timePas = Date.now() - start;
    arow.style.transform = `rotate(1899deg)`
        if(timePas > 2000) clearInterval(timer)
    },1)
}

rotate2()