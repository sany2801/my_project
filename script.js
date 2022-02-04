const downPayment = document.querySelector('.downPayment') //превоначальный взнос
const replenishment = document.querySelector('.replenishment') //сумма пополгниния
const interestRate = document.querySelector('.interestRate') // процент
const term = document.querySelector('.term') //кол-во месяцев
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
    
    const downPaymentValue = +downPayment.value;
    const replenishmentValue = +replenishment.value;
    const interestRateValue = +interestRate.value;
    const termValue = +term.value;
    console.log('первоночальный взнос: ', downPaymentValue);
    console.log("Сумма пополнения: ", replenishmentValue);
    console.log('Процент: ',interestRateValue);
    console.log('Срок депозита в месяцах: ',termValue)
    // let S = 0;
    const procentInMonth = interestRateValue / 12;
    console.log(procentInMonth)

   
})



for (i=0; i<=10; i++){
    let num = 1;
    // i =+ num;
    console.log(i + num)
    console.log(num)
}