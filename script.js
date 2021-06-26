'use strict'

const navbar = document.querySelector('#navbar');
let scroll = false

window.onscroll = function(){
    if(window.pageYOffset > 100){
        navbar.classList.remove('top')
        if(!scroll){
            navbar.style.transform = "translateY(-70px)";
        }
        setTimeout(function(){
           navbar.style.transform = 'translateY(0)';
            scroll = true;
        },900)
    }else{
        navbar.classList.add('top')
        scroll = false
    }
}

$('#navbar a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html,body').animate({scrollTop : $(hash).offset().top - 100,},800);
    };
});