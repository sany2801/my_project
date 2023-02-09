// let num = prompt('Введите число')



 const init = (num)=>{
        console.log(num)
        for (i = 0 ;num>=4; i++) {
        
        if(num%2===0){
            num = num/2
        }
        else{
            num = num*3+1
        }
        console.log(num)
    }
    console.log('Количество итераций '+ i)
 }
 init(2**55)

