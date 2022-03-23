

// const a = 10;
// if(a%2===0){
//  console.log(a/2)
//  console.log(a)
// }
const culc = (num)=>{
    let zero = 0;
    for(let i=0;;i++){
        if(num%2===0){
            zero = num/2;
       }
       else{
            zero = num *3+1;
       }
       for(i=0; ;i++){
            if(zero %2 === 0){
                zero/2
                console.log(zero) 
            }
            else{
                zero *3+1
                console.log(zero) 
            }
        }
    }
}

culc(80)

// const culc1 = (num)=>{
//     for (let i = 0; i <= 100; i++) {
//         if(i%2===0){
//             console.log(i/2);
//         }else{
//             console.log(i*3+1)
//         }

//     }
// }
// culc1()