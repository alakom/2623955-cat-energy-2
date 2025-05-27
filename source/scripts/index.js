const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__nav-toggle');

navToggle.classList.remove('main-header__nav-toggle--not-js');
navMain.classList.remove('main-header__nav-wrapper--not-js');
navMain.classList.add('main-header__nav-wrapper--close');
navToggle.classList.add('main-header__nav-toggle--close');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__nav-wrapper--close')) {
    navMain.classList.remove('main-header__nav-wrapper--close');
    navMain.classList.add('main-header__nav-wrapper--open');
    navToggle.classList.add('main-header__nav-toggle--open');
    navToggle.classList.remove('main-header__nav-toggle--close');
  } else {
    navMain.classList.add('main-header__nav-wrapper--close');
    navMain.classList.remove('main-header__nav-wrapper--open');
    navToggle.classList.add('main-header__nav-toggle--close');
    navToggle.classList.remove('main-header__nav-toggle--open');
  }
});
