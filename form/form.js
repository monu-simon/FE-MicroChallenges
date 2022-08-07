const signUp = document.querySelector('.singnUp');
const signIn = document.querySelector('.signin');

const singupForm = document.querySelector('.signUpForm');
const loginForm = document.querySelector('.loginForm');

signUp.addEventListener('click', () => {
    loginForm.classList.remove('show');
    singupForm.classList.remove('remove');
})

signIn.addEventListener('click', () => {
    singupForm.classList.add('remove')
    loginForm.classList.add('show');
    signIn.style.backgroundColor = red;
    //loginForm.classList.add('show');
})