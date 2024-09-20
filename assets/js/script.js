// calling the header menu
const header = document.querySelector('header');
// setting the header menu to blur on scroll
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 130);
});
// calling menu icon and list
let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');
// setting the menu list to when menu icon is clicked
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}
// setting menu list to close when window is scrolled
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
}
// animating header h1
var typed = new Typed('#fancy', {
    strings: ['Web Designer', 'Web Developer'],
    typeSpeed: 120,
    backSpeed: 70,
    loop:true
  });
