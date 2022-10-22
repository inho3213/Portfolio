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
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

//navbar toggle button
const navbarToggle = document.querySelector('.navbar__toggle-btn');
navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
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


// Arrow up Button
const arrowupBtn = document.querySelector('.arrowup-button');
arrowupBtn.addEventListener('click', ()=>{
    scrollIntoView('#home');
})

//Show Arrow up
const arrowup = document.querySelector('.arrowup-button')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight/2){
        arrowup.classList.add('visible');
    } else{
        arrowup.classList.remove('visible');
    }
})



// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // 앞에게 false라면 뒤에거 실행! - span으로 만든 버튼 누르게되었을때 설정하는 부분
    if (filter == null) {
        return;
    }

    //Remove selection
    const active = document.querySelector('.category__btn.active')
    active.classList.remove('active');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('active');


    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        });     
        projectContainer.classList.remove('anim-out');
    },180);
});

