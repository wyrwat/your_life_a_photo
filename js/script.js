const cameraIcon = document.querySelector('.menu__item--image');
const menuItem = document.querySelectorAll('.menu__item');
const menuTitle = document.querySelector('.home__title');
const socialMedia = document.querySelector('.home__social-media');
const homeWrapper = document.querySelector('.home__wrapper');
menuActive = () => {
    menuItem.forEach((item) => {
        item.classList.toggle('menu__item--active');
    })
    menuTitle.classList.toggle('home__title--inactive');
    homeWrapper.classList.toggle('home__wrapper--menu-on');
    socialMedia.classList.toggle('home__title--inactive');
}
cameraIcon.addEventListener('click', menuActive);