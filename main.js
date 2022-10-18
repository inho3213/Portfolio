'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})


//navbar menu -> scrolling

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});

//contact me button -> scrolling

const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
})


//반복해서 쓰일 수 있으니 함수로
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


// home fade out when scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    console.log(homeHeight);
    home.style.opacity =  1 - (window.scrollY/homeHeight)*1.2;
    //높이가 커질수록 투명도는 낮아져야함
})