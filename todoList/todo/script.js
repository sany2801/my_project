const btnAdd = document.querySelector('.add__todo')
const btnDeleteAll = document.querySelector('.delet__todo')
const progresCard = document.querySelector('.todolist__card')
const comletedCard = document.querySelector('.comleted__card')
const deletedCrd = document.querySelector('.deleted__card')
const input = document.querySelector('.input__todo')
const popapEdit = document.querySelector('.popap-edit')
const inputPopapEdit = document.querySelector('.input-edit')
const btnPopapSave = document.querySelector('.btn-save')
const btnPopapClose = document.querySelector('.btn-close')
let progresTasks = []
let completedTasks = []
let deletedTasks = []

btnAdd.addEventListener('click',()=>{
    if(input.value == ""){
        return null
    }
    progresTasks.push({
        tittle: input.value,
        id: Date.now()
    })
    input.value=''
    console.log(progresTasks)
    init()
})



function init (){
    progresCard.innerHTML=``
    for(i=0; i<progresTasks.length;i++){
        progresCard.append(newCard(progresTasks[i].tittle,progresTasks[i].id))    
    }   
}
function initCompleted (){
    comletedCard.innerHTML = ``
    for(i=0; i<completedTasks.length;i++){
        comletedCard.append(newCard(completedTasks[i].tittle,completedTasks[i].id))     
    }   
}
function initDeleted (){
    deletedCrd.innerHTML = ``
    for(i=0; i<deletedTasks.length;i++){
        deletedCrd.append(newCard(deletedTasks[i].tittle,deletedTasks[i].id))
    }   
}
   

btnDeleteAll.addEventListener('click',()=>{
    progresTasks = [];
    completedTasks =[];
    deletedTasks = [];
    // progresCard.innerHTML=``
    init()
    initCompleted()
    initDeleted()
})
function newCard (text,id){
    const card = document.createElement('div')
    card.classList.add('list-card', 'card')
    card.setAttribute('id', id)
    card.setAttribute('draggable', true)
    card.append(buttonComplete())
    card.append(cardText(text))
    card.append(buttonDelte())
    card.append(buttonEdit())




    const dragStart = function(){
        setTimeout(()=>{
            this.classList.add('hiden')
            console.log(this.id)
        },0)
    }
    const dragEnd = function(){
        this.classList.remove('hiden')
        console.log('end')
    }


    card.addEventListener('dragstart',dragStart)
    card.addEventListener('dragend',dragEnd)
    return card;
}

function buttonComplete(){
    const btnComplete = document.createElement('button')
    btnComplete.classList.add('btn-cmpl', 'btn-card')
    btnComplete.innerText='✔'

    btnComplete.addEventListener('click',(event)=>{
        console.log(event.target.closest('div'))
        let parentElement = +event.target.closest('div').id
        console.log(parentElement)
        for(let i =0 ; i<progresTasks.length; i++){
            if(progresTasks[i].id === parentElement){
                completedTasks.push(progresTasks[i])
                progresTasks.splice(i,1)
                console.log(completedTasks)
                initCompleted()
                init()
            }
        }
    })
    return btnComplete
}


function buttonDelte(){
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete', 'btn-card')
    btnDelete.innerText="🗑️"

    btnDelete.addEventListener('click',(event)=>{
        console.log('click')
        let parentElement = +event.target.closest('div').id
        for(let i = 0; i<progresTasks.length;i++){
            if(progresTasks[i].id === parentElement){
                deletedTasks.push(progresTasks[i])
                progresTasks.splice(i,1)
                initDeleted()
                init()
            }
        }
        for(let i = 0; i<completedTasks.length;i++){
            if(completedTasks[i].id === parentElement){
                deletedTasks.push(completedTasks[i])
                completedTasks.splice(i,1)
                initDeleted()
                initCompleted()
            }
        }
    })
    return btnDelete
}

function  buttonEdit(){

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn-edit', 'btn-card')
    buttonEdit.innerText='✏️';

    buttonEdit.addEventListener('click',(event)=>{
       let parentElementId = +event.target.closest('div').id
       popapEdit.style.display="block"
       
            for(i=0; i<= progresTasks.length; i++) {
                if(progresTasks[i].id === parentElementId){
                inputPopapEdit.value = progresTasks[i].tittle
                break;
            }
        }
        btnPopapSave.addEventListener('click', ()=>{
            
            console.log(i)
            progresTasks[i].tittle = inputPopapEdit.value
            popapEdit.style.display = 'none'
            init()
    })
})
    return buttonEdit
}



function cardText(text){
    const cardText = document.createElement('div');
    cardText.classList.add('card-text')
    cardText.innerText=text;
    return cardText
}

btnPopapClose.addEventListener('click',()=>{
    popapEdit.style.display = "none";
})



