const wrapper = document.getElementById('wrp')
const wrp = document.querySelector('.wrp')
wrapper.addEventListener('keydown',(event)=> {
  console.log(event.key)
  if(event.key === 'q'){
    console.log(true)
  }
})

