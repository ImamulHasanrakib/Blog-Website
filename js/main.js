
const menuBtn = document.querySelector('.nav_menu_btn');

const mobiNav = document.querySelector('.mobile_nav');
const closeBtn = document.querySelector('.nav_close_btn');

menuBtn.addEventListener('click', ()=>{
    mobiNav.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    mobiNav.classList.remove('active');
});