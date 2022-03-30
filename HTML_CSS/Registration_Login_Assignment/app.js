const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const ageInput = document.querySelector('#age');
var gen = document.registerForm.gender;


function validate(event) {
    validateForm();

    if (isFormValid() == true) {
        console.log("Form is valid");
        console.log(usernameInput.value);
        addUserFormToLocalStorage(event);
    } else {
        event.preventDefault();
    }
}


function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function addUserFormToLocalStorage(event) {
    let usersData = new Array();
    usersData = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')) : [];
    if (usersData.length > 0) {
        /*if (checkIsEmailExistOrNot(usersData) == true) {
            setError(emailInput, 'Email is already exists in local storage, use a differnt one');
            event.preventDefault();
        }*/
        if(usersData.some((v) => {return v.email == emailInput.value})) {
            setError(emailInput, 'Email is already exists in local storage, use a differnt one');
            event.preventDefault();
        }
        else {
            pushUser(usersData);

        }

    } else {
        pushUser(usersData);
    }
    event.preventDefault();
}

function checkIsEmailExistOrNot(data) {
    let result = false;
    data.forEach((user) => {
        if (user.email == emailInput.value) {
            result = true;
        }
    })


    return result;
}

function pushUser(data) {
    console.log(document.registerForm.gender.value);
    data.push({
        name: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        age: ageInput.value,
        gender:document.registerForm.gender.value
    });
    localStorage.setItem('User', JSON.stringify(data));
    //Form Reset code
     document.querySelector("#create-account-form").reset();
     const inputContainers = form.querySelectorAll('.input-group');
     inputContainers.forEach((container) => {
         if (container.classList.contains('success')) {
             container.classList.remove('success');
         }
     });
}


function validateForm() {
    //USERNAME
    //console.log(usernameInput.value);
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name can not be empty');
    } else if (usernameInput.value.trim().length < 4 || usernameInput.value.trim().length > 20) {
        setError(usernameInput, 'Name must be min 4 and max 20 charecters');
    } else {
        setSuccess(usernameInput);
    }
    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Password can not be empty');
    } else if (passwordInput.value.trim().length < 4 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'Password min 4 max 20 charecters');
    } else {
        setSuccess(passwordInput);
    }
    //CONFIRM PASSWORD
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'Password can not be empty');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Password does not match');
    } else {
        setSuccess(confirmPasswordInput);
    }
    //Gender
    if (gen[0].checked == false && gen[1].checked == false) {
        document.getElementById('radioError').innerHTML = "Please Select Gender";
        document.getElementById('radioError').style.color = "red";
    } else {
        document.getElementById('radioError').innerHTML = "";
    }

    //Age
    if (ageInput.value.trim() == '') {
        setError(ageInput, 'Age can not be empty');
    } else if (ageInput.value.trim() < 13) {
        setError(ageInput, 'Age should be grater than 12');
    } else {
        setSuccess(ageInput);
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

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

