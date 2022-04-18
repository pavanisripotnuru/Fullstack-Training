/*form.addEventListener('submit', (event) => {
    alert(usernameInput.value);

    validateForm();

    if (isFormValid == true) {
        form.submit();
    } else {
        event.preventDefault();
    }

});


function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}*/


const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const fail = document.querySelector('#failuer');
const form = document.querySelector('#create-account-form');

function login(event) {
    validateForm(event);
    let usersData = new Array();
    usersData = JSON.parse(localStorage.getItem('User'));

    if (isValidForm(event) == true) {
        if (isValidUser(usersData) == true) {
            console.log("Login Sucees");
        } else {
            fail.textContent = 'User Does not Exist!!!';
            event.preventDefault();
        }
    }else {
        event.preventDefault();
    }

}

function isValidForm(event) {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    event.preventDefault();
    return result;
}
function isValidUser(data) {
    var valid = false;
    data.forEach((user) => {
        if (user.email == emailInput.value && user.password == passwordInput.value) {
            console.log("Login Sucees");
            localStorage.setItem('name', user.name);
            console.log(localStorage.getItem('name'))
            valid = true;

        }
    })
    return valid;
}
function validateForm(event) {
    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    }else {
        emailInput.parentElement.classList.remove('error');
    }
    //PASSWORD
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Please provide password');

    }
    else {
        passwordInput.parentElement.classList.remove('error');
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;

}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
