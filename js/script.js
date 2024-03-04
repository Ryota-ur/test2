
const btn = document.querySelector('.drawer-btn');
const overlay = document.querySelector('.over-lay');
const sideBlock = document.querySelector('.menu__sideBlock');

btn.addEventListener('click',()=>{
btn.classList.toggle('open');
overlay.classList.toggle('hide');
sideBlock.classList.toggle('slide');
});

overlay.addEventListener('click',()=>{
overlay.classList.remove('hide');
btn.classList.remove('open');
sideBlock.classList.remove('slide');
});

