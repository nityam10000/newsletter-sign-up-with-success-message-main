const mainHead = document.querySelector('.heading');
const successCard = document.querySelector('.success-card');
const emailRegForm = document.querySelector('.email-reg-form');
const successcardBtn = document.querySelector('#dismiss-msg');
const email = document.querySelector('.inpt-txt');
const invalidTxt = document.querySelector('.invalid');
const b = document.querySelector('b');
const image = document.querySelector('.img');
let validMail = '';

function setResponsiveImage() {
    let minWidth = window.innerWidth;    
    if(minWidth <= 744){
        image.innerHTML = `<img src="./assets/images/illustration-sign-up-mobile.svg" alt="" width="100%">`;
    } else {
        image.innerHTML = `<img src="./assets/images/illustration-sign-up-desktop.svg" alt="" width="100%">`;
    }
}

function init() {
    
    setResponsiveImage();
    window.addEventListener('resize', setResponsiveImage);


    successcardBtn.addEventListener('click', () => {
        mainHead.classList.remove('hide');
        successCard.classList.add('hide');
    })
    
    emailRegForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(email.checkValidity() && email.value != ''){
            validMail = email.value;
            b.innerHTML = validMail;
            mainHead.classList.add('hide');
            successCard.classList.remove('hide');
            
            email.classList.remove('invalid-inpt-txt');
            invalidTxt.classList.add('hide');
            
        }else{
            email.classList.add('invalid-inpt-txt');
            invalidTxt.classList.remove('hide');

        }
    })
}

init();