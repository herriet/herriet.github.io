const mobileNav = document.getElementById('main-nav');
const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const closeIcon = document.getElementsByClassName('close-icon')[0];
const navItems = Array.from(document.querySelectorAll('.main-nav-item'));
const body = document.body;

console.log(navItems);

const closeMobileNav = e => {
  console.log(e);
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  closeIcon.classList.add('hide');
  // body.style.overflowY = "visible";
  body.classList.remove('hide-yscroll');
};

const openMobileNav = e => {
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  closeIcon.classList.remove('hide');
  // body.style.overflowY = "hidden";
  body.classList.add('hide-yscroll');
};

hamburgerIcon.addEventListener('click', openMobileNav);

closeIcon.addEventListener('click', closeMobileNav);

mobileNav.addEventListener('click', e => {
  if (e.target.nodeName.toLowerCase() === 'a') {
    closeMobileNav();
  }
});

console.log(hamburgerIcon);

//When nav a tag has been clicked
//the body must have a vertical scroll
// navItems.forEach(nav => {
//   nav.addEventListener('click', closeMobileNav);
//   nav.addEventListener('keypress', closeMobileNav);
// });
