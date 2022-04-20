const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const lastnameInput = document.querySelector('#lastname')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const ageInput = document.querySelector('#age');
var gen = document.registerForm.gender;
let userObj = {};
let response = {};


function validate(event) {
    validateForm();

    if (isFormValid() == true) {
        console.log("Form is valid");
        console.log(usernameInput.value);
       // addUserFormToLocalStorage(event);
       // console.log("Local storage task is completed")
        saveUser(event)
        event.preventDefault();
          
       // formReset();       
    } else {
        event.preventDefault();
    }
}

function saveUser(event) {
   alert("calling api")
    userObj = {
        'name': usernameInput.value,
        'last_name':lastnameInput.value,
        'email': emailInput.value,
        'password': passwordInput.value,
        'confirm_password': passwordInput.value,
        'gender':document.registerForm.gender.value,
        'age': ageInput.value
    }
    const data = JSON.stringify(userObj);
    console.log(userObj)
    console.log(data)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            alert(this.status)
            alert(this.responseText);
            response= JSON.parse(this.responseText);
            console.log(response.token)
            console.log(response.data[0].id)
           localStorage.setItem('email',emailInput.value);
           localStorage.setItem('token', response.token)
           userId=response.data[0].id;
           localStorage.setItem('userId', userId)
           console.log(localStorage.getItem("email"));
               alert("Resgister Successfull")
              // var url="dashboard.html?userId="+userId;
              var url="dashboard.html";
               window.location.href = url;
            //formReset();  

         }else if(this.readyState == 4 && this.status==400){
             alert(this.status)
             alert(this.responseText);
             setError(emailInput, 'Email is already exists in database use a differnt one');
             event.preventDefault();
         }
    };
    xhttp.open("POST", "http://localhost:3000/register/user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);

}

function formReset() {
    document.querySelector("#create-account-form").reset();
    const inputContainers = form.querySelectorAll('.input-group');
    inputContainers.forEach((container) => {
        if (container.classList.contains('success')) {
            container.classList.remove('success');
        }
});

}


/*async function apiCall() {
    console.log("calling api")
    const data = JSON.stringify(usersData);
    console.log(usersData)
    const response = await fetch('http://localhost:3000/register/user', {
      method: 'POST',
      body: data, // string or object
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'mode' : 'no-cors'
        //'Access-Control-Allow-Origin' : 'http://localhost:3000',
       // 'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT'


      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("completed calling api") 
}
const userAction = async () => {
    console.log("calling api")
    const response = await fetch('http://localhost:3000/register/user', {
      method: 'POST',
      body: data, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("completed calling api")

  }*/


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
        last_name:lastnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirm_password: passwordInput.value,
        gender:document.registerForm.gender.value,
        age: ageInput.value

    });
    localStorage.setItem('User', JSON.stringify(data));
     userObj = {
        'name': usernameInput.value,
        'last_name':lastnameInput.value,
        'email': emailInput.value,
        'password': passwordInput.value,
        'confirm_password': passwordInput.value,
        'gender':document.registerForm.gender.value,
        'age': ageInput.value
    }
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

