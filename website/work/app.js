const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click'. function(){
    menu.classlist.toggle('is active')
    menulinks.classlist.toggle('active');
});
