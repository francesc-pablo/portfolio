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
// Optional interactivity: Highlight skills on click
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('click', () => {
      alert(`You clicked on ${category.querySelector('h3').innerText} skills!`);
    });
  });
// fadein on scroll
document.addEventListener("scroll", function () {
  var pageTop = window.scrollY;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.querySelectorAll(".fadein");

  tags.forEach(function (tag) {
    if (tag.getBoundingClientRect().top + pageTop < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  });
});
