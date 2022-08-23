// const inputName = document.querySelector('#formName')
// const phone = document.querySelector('#formPhone')
// const email = document.querySelector('#formEmail')



// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form');
//     form.addEventListener('submit',send)

//     async function send (e){
//         e.preventDefault();
     
//         let formData = new FormData(form);


//         form.classList.add('sending')
//         let response = await fetch('send.php',{
//             method: 'POST',
//             body: formData
//         });


//         if (response.ok){
//             let result = await response.json();
//             alert("OK");
//             form.classList.remove('sending')
//             form.reset();
//         }else{
//             alert('Ошибка!!!!!')
//             form.classList.remove('sending')
//         }
//     }
// })


