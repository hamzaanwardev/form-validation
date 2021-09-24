const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = document.querySelector('small');
    small.innerText = message;
}

    function isValidEmail () {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
    }



function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(userName.value === '' ) {
        showError (userName, 'Username is required');
    } else {
        showSuccess (userName);
    }

    if (email.value === '' ) {
        showError (email, 'Email is Required');
    } else if (!isValidEmail(email.value)) {
        showError (email, 'Email is not Valid'); 
    } 
    else {
        showSuccess (email);
    }

    if (password.value === '' ) {
        showError (password, 'Password is Required');
    } else {
        showSuccess (password);
    }

    if (password2.value === '' ) {
        showError (password2, 'Password 2 is Required');
    } else {
        showSuccess (password2);
    }


    console.log('form Submitted successfully');
});