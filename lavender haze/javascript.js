burger = document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.list')
burger.addEventListener('click', ()=>{
   navbar.classList.toggle('hnav')
   navlist.classList.toggle('vclass')
})