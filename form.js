'use strict';
const regex = new RegExp(/[/*+-]|[A-Z]+/);
const checkPass = function () {
    let inputPassword = document.getElementById('inputPassword').value;
    let passRegex = document.getElementById('passwordRegex');
    if (regex.test(inputPassword)) {
        // console.log(true);
        passRegex.innerText = '';
    } else {
        //console.log(false);
        passRegex.innerText = 'Password must contain uppercase letters or characters (+-/*)';
    }
};
const regexEmail = new RegExp(/[@]/);
const checkEmail = function () {
    let inputEmail = document.getElementById('inputEmail').value;
    let passRegex = document.getElementById('emailRegex');
    if (regexEmail.test(inputEmail)) {
        //console.log(true);
        passRegex.innerText = '';
    } else {
        //console.log(false);
        passRegex.innerText = 'Example: "email@gmail.com" ';
    }
};
const regexSecondName = new RegExp(/^[a-z0-9A-Z]{3,9}$/);
const checkSecondName = function () {
    let inputEmail = document.getElementById('inputSecondName').value;
    let secondNameRegex = document.getElementById('secondNameRegex');
    if (regexSecondName.test(inputEmail)) {
        //console.log(true);
        secondNameRegex.innerText = '';
    } else {
        //console.log(false);
        secondNameRegex.innerText = 'Field Secondname should contain from 3 to 10 letters';
    }
};
//send form
$('#registration').submit(function (e) {
    let form = $(this);
    // console.log(form);
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function (result) {
            location.href = "./company.html"
        }
    })
});

