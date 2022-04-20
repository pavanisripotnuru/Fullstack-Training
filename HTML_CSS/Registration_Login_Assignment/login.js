const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const fail = document.querySelector('#failuer');
const form = document.querySelector('#create-account-form');
let userId = document.getElementById('hidden_user_id').value
let loginObj = {};
let result= {}

function login(event) {
    alert(true)

    validateForm();
    let usersData = new Array();
    //usersData = JSON.parse(localStorage.getItem('User'));
    getDataFromDb(event);
    event.preventDefault();

    /*if (isValidUser(usersData) == true) {
        console.log("Login Sucees in local storage");
        console.log("Checking in DB using rest api")
        getDataFromDb(event);
     
       // window.location.href = 'UserHome.html';
       event.preventDefault();

    }
   else {
        if (isValidForm() == true) {
            fail.textContent = 'User Does not Exist!!!';
        }
        event.preventDefault();

    }*/

}

function getDataFromDb(event) {
    alert(true)

    loginObj = {
        "email" : emailInput.value,
        "password" : passwordInput.value

    }
    const data = JSON.stringify(loginObj);
    console.log(data)
    //const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1NiIsImlhdCI6MTY1MDM3MTE5M30.tljA5DjKcKSHuOysSObZhhBA4wA7gdMKViIsa_E_gaA";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
             result= JSON.parse(this.responseText);
             console.log(result.token)
             console.log(result.data[0].id)
             userId=result.data[0].id;
            localStorage.setItem('email',emailInput.value);
            localStorage.setItem('token', result.token)
            localStorage.setItem('userId', userId)
            console.log(localStorage.getItem("email"));
                alert("!!!!Login success from DB!!!!")
                var url="dashboard.html";
                window.location.href = url;
         }
         if (this.readyState == 4 && this.status == 401) {
            alert(this.responseText);

         }
    };
    xhttp.open("POST", "http://localhost:3000/login/user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
   // xhttp.setRequestHeader("Authorization", token);
    xhttp.send(data);
    event.preventDefault();

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

