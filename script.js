const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
    }

    

    function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
                if (input.value.trim() === '') {
                    showError(input, `${getFieldName(input)} is required`);
                } else {
                    showSuccess(input);
                }
        });
    }

    function checkLength (input, min, max) {
        if(input.value.length < min) {
            showError (input, `${getFieldName(input)} must be atleast ${min} characters`)
        } else if(input.value.length > max) {
            showError (input, `${getFieldName(input)} must be less than ${max} characters`)
        } else {
            showSuccess (input);
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }



function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25)
});