const submit_button = document.querySelector('button')
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const password = document.querySelector('#pwd')
const confirm_pwd = document.querySelector('#confirm-pwd')



submit_button.addEventListener('click' , function() {
    let allInputsValid = true;

    inputs.forEach(function(input) {
        if(!input.checkValidity()) {
            allInputsValid = false;
            const error_message = document.getElementById(input.id + '-error').removeAttribute('hidden')
        }
        else {
            const error_message = document.getElementById(input.id + '-error').setAttribute('hidden', 'true')
        }
    });

    if (password.value != confirm_pwd.value) {
        allInputsValid = false
        const unmatch_pwd = document.getElementById('pwd-match-error').removeAttribute('hidden')
    }


    if(allInputsValid) {
        form.submit()
    }
});