// // let offset = 0
// // const sliderPrev = document.querySelector('.slider-previous')
// // const sliderNext = document.querySelector('.slider-next')
// // const sliderLine = document.querySelector('.slider-line')
// // const buttonNavigator = document.querySelector('.button-navigator')
// // const imgSlider = document.getElementsByClassName("imgSlider")



// //     const draw = (index)=>{
// //     offset =+ index;
// //     sliderLine.style.left = -offset + 'px';
// // }   


// // const init = ()=>{
// //     buttonNavigator.addEventListener('click', (event)=>{       
// //         btnId = event.target.id
// //         draw(btnId)
// //         document.getElementById(offset).style.backgroundColor = "yellow";
// //     })


// //     sliderPrev.addEventListener('click',(event)=>{
// //         draw(offset-600)
// //         if (offset < 0) {
// //             draw(3000);
// //         }
// //     console.log("Prev " + offset)
// //     })


// //     sliderNext.addEventListener('click',()=>{
// //         draw(offset+600)
// //         if(offset > 3000){
// //             draw(0)
// //         }
// //     console.log("Next "+ offset)
// //     })
// // }
// // init()
// const slider =document.querySelector('.slider')
// const btn = document.querySelectorAll('.btn')
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')
// let offset = 0;

// prev.addEventListener('click', ()=>{
//     draw(offset - 600)
//     if(offset < 0){
//         draw(3000)
//     }
// })

// next.addEventListener('click',()=>{
//   draw( offset + 600)
//   if(offset > 3000){
//       draw(0)
//   }  
// })

// const draw = (index)=>{
//     console.log(offset)
//     offset =+ index;
//     slider.style.left = -offset + 'px';
    
//     btn.forEach((item,i,a) => {
//         if(item.id === offset.toString()){
//             console.log('ttt')
//             item.classList.add('active')
//             a[i-1].classList.remove('active')
//         }
//         // console.log(item)
//     })
// }  



// function avtiveLink(){
//     btn.forEach((item) =>{
//         // console.log(this)
//         item.classList.remove('active')
//         this.classList.add('active')
//     })
//     };
// btn.forEach((item) =>
// item.addEventListener('click', avtiveLink))

// btn.forEach((item) =>
// item.addEventListener('click', (avtiveLink)=>{
//     btnId = avtiveLink.target.id
//      draw(btnId)
// }))
