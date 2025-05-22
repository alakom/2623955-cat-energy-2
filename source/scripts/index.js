const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__nav-toggle');

navMain.classList.remove('main-header__nav-wrapper--not-js');
navMain.classList.add('main-header__nav-wrapper--close');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__nav-wrapper--close')) {
    navMain.classList.remove('main-header__nav-wrapper--close');
    navMain.classList.add('main-header__nav-wrapper--open');
  } else {
    navMain.classList.add('main-header__nav-wrapper--close');
    navMain.classList.remove('main-header__nav-wrapper--open');
  }
});
