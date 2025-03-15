let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = form.querySelector('[name="name"]').value;
    if (name.trim() === '') {
        alert('Por favor, insira seu nome.');
        event.preventDefault();
    }
});

