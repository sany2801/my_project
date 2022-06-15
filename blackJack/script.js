const chirva = innerHTML=`<div class='chirva'></div>`
const buba = innerHTML=`<div class='buba'></div>`
const pika = innerHTML=`<div class='pika'></div>`
const kresta = innerHTML=`<div class='kresta'></div>`

console.log(chirva)
let coloda = [
    {
        meaning: 2,
        suit: chirva
    },{
        meaning: 3,
        suit: chirva
    },{
        meaning: 4,
        suit: chirva
    },{
        meaning: 5,
        suit: chirva
    },{
        meaning: 6,
        suit: chirva
    },{
        meaning: 7,
        suit: chirva
    },{
        meaning: 8,
        suit: chirva
    },{
        meaning: 9,
        suit: chirva
    },{
        meaning: 10,
        suit: chirva
    },{
        meaning: 'jack',
        suit: chirva
    },{
        meaning: 'queen',
        suit: chirva
    },{
        meaning: 'king',
        suit: chirva
    },{
        meaning: 'ace',
        suit: chirva
    },{
        meaning: 2,
        suit: buba
    },{
        meaning: 3,
        suit: buba
    },{
        meaning: 4,
        suit: buba
    },{
        meaning: 5,
        suit: buba
    },{
        meaning: 6,
        suit: buba
    },{
        meaning: 7,
        suit: buba
    },{
        meaning: 8,
        suit: buba
    },{
        meaning: 9,
        suit: buba
    },{
        meaning: 10,
        suit: buba
    },{
        meaning: 'jack',
        suit: buba
    },{
        meaning: 'queen',
        suit: buba
    },{
        meaning: 'king',
        suit: buba
    },{
        meaning: 'ace',
        suit: buba
    },{
        meaning: 2,
        suit: pika
    },{
        meaning: 3,
        suit: pika
    },{
        meaning: 4,
        suit: pika
    },{
        meaning: 5,
        suit: pika
    },{
        meaning: 6,
        suit: pika
    },{
        meaning: 7,
        suit: pika
    },{
        meaning: 8,
        suit: pika
    },{
        meaning: 9,
        suit: pika
    },{
        meaning: 10,
        suit: pika
    },{
        meaning: 'jack',
        suit: pika
    },{
        meaning: 'queen',
        suit: pika
    },{
        meaning: 'king',
        suit: pika
    },{
        meaning: 'ace',
        suit: pika
    }, {
        meaning: 2,
        suit: kresta
    },{
        meaning: 3,
        suit: kresta
    },{
        meaning: 4,
        suit: kresta
    },{
        meaning: 5,
        suit: kresta
    },{
        meaning: 6,
        suit: kresta
    },{
        meaning: 7,
        suit: kresta
    },{
        meaning: 8,
        suit: kresta
    },{
        meaning: 9,
        suit: kresta
    },{
        meaning: 10,
        suit: kresta
    },{
        meaning: 'jack',
        suit: kresta
    },{
        meaning: 'queen',
        suit: kresta
    },{
        meaning: 'king',
        suit: kresta
    },{
        meaning: 'ace',
        suit: kresta
    }
]
// const kresta = 
const random =(min, max)=>{
    const random = Math.round(Math.random() * (max - min) + min);
    return random
}
const wrapper = document.querySelector('.wrapper')


const draw = ()=>{
    for (let max1 = 51; max1 >= 0; --max1) {   
        let randomCard = random(0, max1)
        console.log('max '+ max1)
        console.log(randomCard)
        wrapper.innerHTML +=`
        <div class="card">
        ${coloda[randomCard].suit}
        <p class="meaning">${coloda[randomCard].meaning}</p>
        </div>`
        coloda.splice(randomCard,1)
        console.log(coloda)
        coloda.push(randomCard)
    }       
}
draw()

console.log(coloda)