let menu =document.querySelector('.menu');
window.addEventListener('scroll',()=>{
    let scrolling = this.scrollY

    if(scrolling > 200){
        menu.classList.add('fixed_menu')
    }
    else{
        menu.classList.remove('fixed_menu')
    }

})