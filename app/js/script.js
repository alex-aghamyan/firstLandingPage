const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');
const btnRequest = document.querySelectorAll('.button');
const popupClose = document.querySelector('.popup__close');


btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {  // Close Hamburger Menu
        header.classList.remove('open');
        body.classList.remove('nonscroll');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out')
        })
    }
    else { // Open Hamburger Menu
        header.classList.add('open');
        body.classList.add('nonscroll');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

btnRequest.forEach((button) => {
    button.addEventListener('click', () => {
        popup.style.display = "flex";
        body.style.overflowY = "hidden";
        header.style.zIndex = "0"
    })
});

popupClose.addEventListener('click', () => {
    popup.style.display = "none";
    body.style.overflowY = "scroll";
    document.popup.reset()
});