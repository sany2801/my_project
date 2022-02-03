const downPayment = document.querySelector('.downPayment')
const replenishment = document.querySelector('.replenishment')
const interestRate = document.querySelector('.interestRate')
const term = document.querySelector('.term')
const submt = document.querySelector('.submt')
const result = document.querySelector('.result')
const range = document.querySelector('#range')
const rangeValue = document.querySelector('.rangeValue')
rangeValue.innerHTML = `${range.value}`
range.addEventListener('click', (event)=>{
    rangeValue.innerHTML = `${range.value}`
})
submt.addEventListener('click',(event)=>{
    event.preventDefault()
    result.innerHTML = "";
    const arr = []
    for(i=1; i<= +term.value +1;i++){
        arr.push(i)
    }
    const arrRed =  arr.reduce(function(sum, acum, index){
        let procent = (((sum/100)* +interestRate.value)/12) 
        result.innerHTML += `<p>${index} месяц ${(sum - +replenishment.value).toFixed(+range.value)}`
        return sum + procent + +replenishment.value;
    },+replenishment.value)
})