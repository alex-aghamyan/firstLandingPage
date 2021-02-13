const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const btnRequest = document.querySelectorAll('.button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const submit = document.querySelector('.submit');

const fName = document.forms["popup"]["name"].value;
const lName = document.forms["popup"]["lastname"].value;
const phoneNum = document.forms["popup"]["tel"].value;


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
});

function validateForm () {
    if (fName !== "") {
        alert('enter only letters');
        return false
    }
    if (lName != "") {
        alert('enter only letters');
        return false
    }
    if (typeof phoneNum !== 'number' ) {
        alert('enter only numbers');
        return false
    }
}

submit.addEventListener('click', () => {
    popup.style.display = "none";
    body.style.overflowY = "scroll";
    validateForm()
})