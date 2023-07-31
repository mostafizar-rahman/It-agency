
let toggle = document.querySelector('.navbar-toggler')
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('js')
})
jarallax(document.querySelectorAll(".jarallax"));
let navbar = document.querySelector('.navbar')
window.onscroll = function(){
    let a = window.pageYOffset
    if(a > 200){
        navbar.classList.add('add')
    }else{
        navbar.classList.remove('add')
    }
}





$(document).ready(function(){
    $('.case_slider').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('.patner_slider').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.testimonials_slider').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        animateOut: 'fadeInBottom',
        animateIn: 'fadeInTop',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1200
    })
})
