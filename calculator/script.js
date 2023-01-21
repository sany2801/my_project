const result= []
// console.log(typeof result)

const resultValur = document.querySelector('.resultvalue')

const allButton = document.querySelectorAll('.btnvalue')
const number = document.querySelectorAll('.number')
// console.log(allButton)
// console.log(allButton[1].value)


allButton.forEach(element => {
    element.addEventListener('click',(el)=>{
        console.log(el.target.value)
        result.push(+el.target.value)
        console.log(result)
       const result2 =  result.join('')
       console.log(result2)
    })
});

let a 
let b 
let c 


const arr = [1, 2, 3, 4, 5, a, b, c];
console.log(arr)
c = 66

const newarr = arr.join(`+`)
console.log(newarr)
console.log(newarr)
