const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomNum = (min, max) => {
    let num = Math.round(Math.random() * (max - min) + min);
    return num
}
const generation1 = () => {
    const line_1 = []
    for (let i = numbers1.length - 1; i >= 0; --i) {
        let num = randomNum(i, 0)
        line_1.push(numbers1.splice(num, 1)[0])
    }
    return line_1
}
const line_1 = generation1()
console.log(line_1)
const generation2 = () => {
    const line_2 = []
    const newNumbwers1 = numbers2.filter(item => item != line_1[0] && item != line_1[1] && item != line_1[2])
    // console.log(newNumbwers1)
    for (let i = newNumbwers1.length - 1; i >= 3; --i) {
        let num = randomNum(i, 0)
        line_2.push(newNumbwers1.splice(num, 1)[0])
    }
    const newNumbwers2 = numbers2.filter(item => 
        item != line_1[3] && item != line_1[4] && 
        item != line_1[5] && item != line_2[0] && 
        item != line_2[1] && item != line_2[2])
    // console.log(newNumbwers2)
    if (newNumbwers2.length === 6) {
        const newNumbwers2 = [line_1[0], line_1[1], line_1[2]]
        const newNumbwers3 = [line_1[6], line_1[7], line_1[8]]
        // console.log(newNumbwers2)
        // console.log(newNumbwers3)
        for (let i = newNumbwers3.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers3.splice(num, 1)[0])
        }
        for (let i = newNumbwers2.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers2.splice(num, 1)[0])
        }
        // console.log(newNumbwers2)
    } else if (newNumbwers2.length === 3) {
        const newNumbwers2 = [line_1[0], line_1[1], line_1[2]]
        const newNumbwers3 = [line_1[3], line_1[4], line_1[5]]
        // console.log(newNumbwers2)
        // console.log(newNumbwers3)
        for (let i = newNumbwers2.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers2.splice(num, 1)[0])
        }
        for (let i = newNumbwers3.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers3.splice(num, 1)[0])
        }
        // console.log(newNumbwers2)
    } else if (newNumbwers2.length === 5){
        const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(item => 
                                item != line_2[0] && item != line_2[1] && 
                                item != line_2[2] && item != line_1[3] && 
                                item != line_1[4] && item != line_1[5])
        // console.log(newNumbwers1)
        const newNumbwers2 = [line_1[0],line_1[1],line_1[2]]
        // console.log(newNumbwers2)
        for(let i = newNumbwers2.length-1;i>=2;--i){
            let num = randomNum(i,0)
            newNumbwers1.push(newNumbwers2[num])
            // console.log(newNumbwers2[num])
        }
        // console.log(newNumbwers1)
        for (let i = newNumbwers1.length - 1; i >=0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers1.splice(num, 1)[0])
        }
        const newNumbwers3 = numbers3.filter(item =>
            item != line_2[0] && item != line_2[1] && item != line_2[2] &&
            item != line_2[3] && item != line_2[4] && item != line_2[5])
    
            // console.log(newNumbwers3)
            for (let i = newNumbwers3.length - 1; i >= 0; --i) {
                let num = randomNum(i, 0)
                line_2.push(newNumbwers3.splice(num, 1)[0])
            }
        
    } else if (newNumbwers2.length === 4){
        const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(item =>
            item !=line_2[0] && item !=line_2[1] && item !=line_2[2])
            // console.log(newNumbwers1)
        const newNumbwers2 = [line_1[0], line_1[1], line_1[2]]
        // console.log(newNumbwers2)
        for(let i = newNumbwers2.length-1; i>=1; --i){
            let num = randomNum(i,0)
            newNumbwers1.push(newNumbwers2.splice(num,1)[0])
        }
        // console.log(newNumbwers1)
        for (let i = newNumbwers1.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers1.splice(num, 1)[0])
        }   
    const newNumbwers3 = numbers3.filter(item =>
        item != line_2[0] && item != line_2[1] && item != line_2[2] &&
        item != line_2[3] && item != line_2[4] && item != line_2[5])

        // console.log(newNumbwers3)
        for (let i = newNumbwers3.length - 1; i >= 0; --i) {
            let num = randomNum(i, 0)
            line_2.push(newNumbwers3.splice(num, 1)[0])
        }
    }
    return line_2
}
const line_2 = generation2()
console.log(line_2)
const generation3 = () => {
    const line_3 = []
    const newNumbwers1 = line_1.filter(item => item != line_1[0] && item != line_1[1] && item != line_1[2] && item != line_2[0] && item != line_2[1] && item != line_2[2])
    const newNumbwers2 = line_1.filter(item => item != line_1[3] && item != line_1[4] && item != line_1[5] && item != line_2[3] && item != line_2[4] && item != line_2[5])
    const newNumbwers3 = line_1.filter(item => item != line_1[6] && item != line_1[7] && item != line_1[8] && item != line_2[6] && item != line_2[7] && item != line_2[8])
    // console.log(newNumbwers1)
    // console.log(newNumbwers2)
    // console.log(newNumbwers3)
    for (let i = newNumbwers1.length - 1; i >= 0; --i) {
        let num = randomNum(i, 0)
        line_3.push(newNumbwers1.splice(num, 1)[0])
    }for (let i = newNumbwers2.length - 1; i >= 0; --i) {
        let num = randomNum(i, 0)
        line_3.push(newNumbwers2.splice(num, 1)[0])
    }for (let i = newNumbwers3.length - 1; i >= 0; --i) {
        let num = randomNum(i, 0)
        line_3.push(newNumbwers3.splice(num, 1)[0])
    }
    return line_3
}
const line_3 = generation3()
console.log(line_3)

const generation4 = () =>{
    const line_4 = []
    const newNumbwers1 = []
    let count_1 = numbers2.filter(item =>
        item!=line_1[0] &&item!=line_2[0] &&item!=line_3[0])
        console.log(count_1)
        count_1 = count_1[randomNum(count_1.length-1,0)]
        console.log(count_1)   
    let count_2 = numbers2.filter(item =>
        item!=line_1[1] && item!=line_2[1] && item!=line_3[1] && item!=count_1)
        console.log(count_2)
        count_2 = count_2[randomNum(count_2.length-1,0)]
        console.log(count_2)
    let count_3 = numbers2.filter(item =>
        item!=line_1[2] &&item!=line_2[2] &&item!=line_3[2] && item!=count_1 && item!=count_2)
        console.log(count_3)
        count_3 = count_3[randomNum(count_3.length-1,0)]
        console.log(count_3)
    newNumbwers1.push(count_1,count_2,count_3)
    console.log(newNumbwers1)    
    return line_4;
}
const line_4 = generation4()
// console.log(line_4)