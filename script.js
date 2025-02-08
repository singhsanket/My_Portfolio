let dayNight = document.querySelector('.dayNight')
let banner = document.querySelector('.banner')

dayNight.addEventListener("click", ()=>{
    banner.classList.toggle('night')
})

var typed = new Typed("#text",{strings: ['Sanket Singh', 'Coder','Developer', 'Traveler'],
    loop:true,
    backSpeed:50,
    typeSpeed: 50,})