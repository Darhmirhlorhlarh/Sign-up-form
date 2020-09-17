let hideMe = document.querySelector(".hide");
let showError = document.querySelector(".hide1");
let showPassword = document.querySelector(".hide2");
let showConfirm = document.querySelector(".hide3");

const firstName = document.querySelector(".first");
const email = document.querySelector("#mail");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const submit = document.querySelector(".submit");


firstName.addEventListener("input", function(event){
    if (firstName.validity.valid){
        hideMe.innerHTML = "";
        hideMe.className = "hide";
    }else{

        theError();
    }
   
});
submit.addEventListener("click", function(event) {
    if (!firstName.validity.valid){
        theError();
        event.preventDefault();
    }
});
function theError() {
    if (firstName.validity.valueMissing) {
        hideMe.textContent = "Username Cannot be Empty";
        // errorMsg.classList.add(".hide-user")
    }
    else if (firstName.validity.tooShort) {
        hideMe.textContent= "Should be a minimum of 5 characters"
    }
}

//email validation
email.addEventListener("input", function(event){
    if (email.validity.valid){
        showError.innerHTML = "";
        showError.className = "hide1";
    }else{

        emailError();
    }
   
});
submit.addEventListener("click", function(event) {
    if (!email.validity.valid){
        emailError();
        event.preventDefault();
    }
});
function emailError() {
    if (email.validity.valueMissing) {
        showError.textContent = "Email Cannot be Empty";
        
    }
    else if (email.validity.typeMismatch) {
        showError.textContent= "This does not look like an email"
    }
}

//password validation


password.addEventListener("input", function(event){
    if (password.validity.valid){
        showPassword.innerHTML = "";
        showPassword.className = "hide2";
    }else{

        passwordError();
    }
   
});
submit.addEventListener("click", function(event) {
    let passwords = password.value
    console.log(passwords)
    if (!password.validity.valid){
        passwordError();
        event.preventDefault();
    }
});
function passwordError() {
    let pass = /(?=.*\d)(?=.*[a-z]) (?=.*[A-Z]) .{6,}/;
    if (password.validity.valueMissing) {
        showPassword.textContent = "Please Input a Password";
        
    }
    else if ( !pass.test(password.value)) {
        showPassword.textContent= "Password must contain at least 1 number and 1 Uppercase and 1 lowercase letter"
    }
    else if (password.validity.tooShort) {
        showPassword.textContent = "Password must be 6 characters or more"
    }
    
}

confirmPassword.addEventListener("input", function(event){
    if (confirmPassword.validity.valid){
        showConfirm.innerHTML = "";
        showConfirm.className = "hide3";
    }else{

        confirmError();
    }
   
});
submit.addEventListener("click", function(event) {
    let passwordss = confirmPassword.value
    console.log(passwordss)
    if (!confirmPassword.validity.valid){
        confirmError();
        event.preventDefault();
    }
});
function confirmError() {
    if (confirmPassword.validity.valueMissing) {
        showConfirm.textContent = "Confirm Password";
        
    }
    else if (confirmPassword.value != password.value ) {
        showConfirm.textContent= "Passwords does not Match"
    }
}