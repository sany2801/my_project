const downPayment = document.querySelector('.downPayment')
const replenishment = document.querySelector('.replenishment')
// const count = document.querySelector('.count')
const interestRate = document.querySelector('.interestRate')
const term = document.querySelector('.term')
const submt = document.querySelector('.submt')
const result = document.querySelector('.result')



// A = P x (1 + r/n)nt, где:

// A – сумма, которую вы получите в конце периода;

// P – сумма первоначальных инвестиций, т.е. то, что вы вкладываете;

// r – годовая ставка;

// n – количество периодов начисления ставки (ежемесячно, ежеквартально, ежегодно и т.д.);

// t – общий срок вклада в годах.


submt.addEventListener('click',(event)=>{
    event.preventDefault()
    let p = downPayment.value; //превоначальный взнос
    console.log(p)
    let r = interestRate.value; // процент
    console.log(r)
    // let n = count.value; 
    let t = term.value //кол-во месяцев


    let res = +p + ((p/100)*r)
    console.log(res)
    for(i = 1; i < t; i++){
        let res2 = (res + +replenishment.value)+((p/100)*r)
        console.log(res2)
    }
})