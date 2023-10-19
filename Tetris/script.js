const zone = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0],

]
console.table(zone)

const data = [
    {
        cube: [
            [1,1],
            [1,1]
        ],
        color: "yellow"
    },
    {
        line:[
            [2,0,0,0],
            [2,0,0,0],
            [2,0,0,0],
            [2,0,0,0]
        ],
        color: "white"
    },
    {
        orangeRicky:[
            [0,0,0],
            [0,0,3],
            [3,3,3],
        ],
        color: "orange"
    },
    {
        blueRicky:[
            [0,0,0],
            [4,0,0],
            [4,4,4],
        ],
        color: "blue"
    },
    {
        cleveland:[
            [0,0,0],
            [5,5,0],
            [0,5,5]
        ],
        color: "red"
    },
    {
        rhodeIsland:[
            [0,0,0],
            [0,6,6],
            [6,6,0],
        ],
        color: "green"
    },
    {
        teewee:[
            [0,0,0],
            [0,7,0],
            [7,7,7],
        ],
        color: "roze"
        
    }


]
let block = document.querySelectorAll('.block')
const newBlock = []
for (let i = 0; i < block.length; i += 10) {
    let subArray = [];
        for (let j = i; j < i + 10 && j < block.length; j++) {
          subArray.push(block[j]);
        }
        newBlock.push(subArray);
  }
const color = {
    1: "yellow",
    2: "white",
    3: "orange",
    4: "blue",
    5: "red",
    6: "green",
    7: "roze"
}

zone[0] = [0,0,0,0,0,0,0,0,0,0]
zone[1] = [0,0,0,0,0,0,0,0,0,0]
zone[2] = [0,0,0,0,1,1,0,0,0,0]
zone[3] = [0,0,0,0,1,1,0,0,0,0]

for (let i = 0; i < zone.length; i++) {
    for(let y = 0; y < zone[i].length; y++){
        if(zone[i][y]!==0){
            // console.log(color[y])
            newBlock[i][y].style.backgroundColor=`${color[zone[i][y]]}`
            newBlock[i][y].style.border="2px solid black"

        }
    }
    
}
console.table(color)
const fall = ()=>{
    
}

// setInterval(fall,2s)