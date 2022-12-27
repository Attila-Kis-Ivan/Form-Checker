const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid= false;
let passwordsMAtch = false;


function validateForm() {
    //using Contraint api
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please, fill out all fields.';
        message .style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value) {
        passwordsMAtch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMAtch = false;
        message.textContent = 'Make sure passwords match'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    //if form is valid and passwors match
    if(isValid && passwordsMAtch) {
        message.textContent = 'Successfully Registered!'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFromData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate form
    validateForm();
    //Submit Data if valid
    if(isValid && passwordsMAtch) {
        storeFromData();
    }
    
}


//Event listener
form.addEventListener('submit', processFormData)