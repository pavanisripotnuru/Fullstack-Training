const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const fail = document.querySelector('#failuer');
const form = document.querySelector('#create-account-form');
let loginObj = {};
let result= {}

function login(event) {
    validateForm();
    let usersData = new Array();
    usersData = JSON.parse(localStorage.getItem('User'));

    if (isValidUser(usersData) == true) {
        console.log("Login Sucees in local storage");
        console.log("Checking in DB using rest api")
        getDataFromDb();
     
       // window.location.href = 'UserHome.html';

    }
   else {
        if (isValidForm() == true) {
            fail.textContent = 'User Does not Exist!!!';
        }
        event.preventDefault();

    }

}

function getDataFromDb() {
    loginObj = {
        "email" : emailInput.value,
        "password" : passwordInput.value

    }
    const data = JSON.stringify(loginObj);
    console.log(data)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
             result= JSON.parse(this.responseText);
             console.log(result[0].name)
             console.log(result[0].email)
             if(result[0].email == emailInput.value && result[0].password==passwordInput.value) {
                alert("!!!!Login success from DB!!!!")
            }
         }
    };
    xhttp.open("POST", "http://localhost:3000/login/user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}

function isValidForm() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    console.log(result)
    return result;
}

function isValidUser(data) {
    var valid = false;
    data.forEach((user) => {
        if (user.email == emailInput.value && user.password == passwordInput.value) {
            console.log("Login Sucees");
            localStorage.setItem('name', user.name);
            localStorage.setItem('email',user.email);
            console.log(localStorage.getItem('name'))
            valid = true;

        }
    })
    return valid;
}
function validateForm() {
    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    } else {
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

  /*if(usersData.some((v) => { return v.email==emailInput.value && v.password == passwordInput.value},thisArg)){
        console.log("Login Sucees");
        localStorage.setItem('name', this.usersData.name);
        console.log(localStorage.getItem('name'))
    }*/

