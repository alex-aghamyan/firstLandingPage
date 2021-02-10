const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

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
})

