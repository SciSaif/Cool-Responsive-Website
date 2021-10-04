const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu!
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
    }else if(window.innerWidth > 960 && scrollPos <1400){
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
    }else if(window.innerWidth > 960 && scrollPos <2345){
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
    }else {
        elem.classList.remove('highlight');
    }

}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close mobile menu when a menu item is clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth < 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Modal 
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('#main-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})


//form validation

const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');


//show error message
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

function checkRequired(inputArr){
    inputArr.forEach((input) => {
        if(input.value.trim() === ''){
            showError(input, `${input.name} is required`);
        }else {
            showValid(input);
        }
    });
}

//checking input length 
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${input.name} must be at least ${min} characters`)
    }else if(input.value.length > max) {
        showError(input, `${input.name} must be less than ${max} characters`)
    }else {
        showValid(input);
    }
}

//check passwords match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name1, email, password, passwordConfirm]);
    checkLength(name1, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
});

