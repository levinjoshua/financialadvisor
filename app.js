const faBanner = document.querySelector('.fa-banner')
const menu = document.querySelector('.menu-fixed')
const scrollBtn = document.querySelector('.scroll-btn')


window.addEventListener('scroll',()=>{
    if(scrollY>400){
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display = 'none'
    }
    if(scrollY > 50){
        faBanner.classList.add('fixed')
        menu.classList.add('fixed-menu')
    }else{
        faBanner.classList.remove('fixed')
        menu.classList.remove('fixed-menu')
    }
})