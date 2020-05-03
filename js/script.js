const cameraIcon = document.querySelector('.menu__item--image');

menuActive = () => {
    const menuItem = document.querySelectorAll('.menu__item');
    menuItem.forEach((item) => {
        item.classList.toggle('menu__item--active');
    })
}
cameraIcon.addEventListener('click', menuActive);