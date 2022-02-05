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
    for(i=1; i<= +term.value+1 ;i++){
        arr.push(i)
		console.log(arr)
    }
	// let procent1 = (((+downPayment.value/100)* +interestRate.value)/12) 

    const arrRed =  arr.reduce(function(acum, sum, index){
		// debugger;
		// let procent = (((acum/100)* +interestRate.value)/12) 
        result.innerHTML += `<p>${index} месяц ${(acum - 100).toFixed(+range.value)}`
        return (acum + (((acum/100)* +interestRate.value)/12)) + +replenishment.value;
    },+downPayment.value)
})



// const array = [1,2,3,4,5]
// console.log(array)
// array.reduce(function(acum, sum, index, arr){
// 	console.log(`acum: ${acum}, sum: ${sum}, index: ${index}, arr: ${arr}`)
// 	return acum + sum
// },0)



