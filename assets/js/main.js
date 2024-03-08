/*=============== SHOW MENU ===============*/
document.querySelector('#open-menu').addEventListener('click',()=>{
    document.querySelector('.menu-bar').style.right = '0%';
})
document.querySelector('#close-menu').addEventListener('click',()=>{
    document.querySelector('.menu-bar').style.right = '-100%';
    
})
/*=============== REMOVE MENU MOBILE ===============*/
document.querySelectorAll('.nav-items').forEach(
    (elem)=>{
        elem.addEventListener('click',()=>{

            document.querySelector('.menu-bar').style.right = '-100%';
        });
        
    }
)

/*=============== ADD BLUR HEADER ===============*/
window.addEventListener('scroll',(e)=>{
    const header = document.getElementById('header');
    if(this.scrollY >= 50){
        header.classList.add('blur-header');
    }else{
        header.classList.remove('blur-header');
    }
});

/*=============== SHOW SCROLL UP ===============*/ 

window.addEventListener('scroll',(e)=>{
    const obj = document.querySelector('.scroll-up');
    if(this.scrollY >= 350){
        obj.classList.add('show-scroll-up');
    }else{
        obj.classList.remove('show-scroll-up');
    }
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    opacity: 1,
    scale: 1.1,
    duration : 2500,
    delay: 300,
})
sr.reveal('#home-content, #about-content, .about-container img , .visit-data');
sr.reveal('#home-bread-img , .add-on-element',{rotate: {z : -15} });
sr.reveal('#home-bread-mini, #element-img',{rotate: {z : 15} });
sr.reveal('.home-footer',{scale :1, origin: 'bottom' });


sr.reveal('.items:nth-child(1) img',{rotate: {z : -15}, distance : 0 });
sr.reveal('.items:nth-child(2) img',{rotate: {z : 15}, distance : 0, delay: 600 });
sr.reveal('.items:nth-child(3) img',{rotate: {z : -15}, distance : 0 , delay: 900});

sr.reveal('.product img',{interval: 100, rotate: {z : 15}, distance : 0 });

sr.reveal('#footer-container',{scale :1});