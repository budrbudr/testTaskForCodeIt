'use strict';
/*const rules = [
    {
        text: 'Минимум одна большая буква',
        regex: /[#]/
    },
    {
        text: 'Максимум 8 знаков',
        regex: /[0-9]+/
    },
    {
        text: 'Минимум один символ /',
        regex: /[/!*+-]+/
    }
];

let foo = function () {
    let inputPassword = document.getElementById('inputPassword').value;
    let counter = 0;
    let passRegex = document.getElementById('passwordRegex');
    rules.forEach(function (item) {
        counter++;
        if (item.regex.test(inputPassword)) {
            console.log(true);
            passRegex.innerText='';
        } else {
            console.log(false);
            passRegex.innerText = 'Password must contain uppercase letters and characters (+-/!*)';
        }
    })
};*/
const regex = new RegExp(/[/*+-]|[A-Z]+/);
const checkPass = function () {
    let inputPassword = document.getElementById('inputPassword').value;
    let passRegex = document.getElementById('passwordRegex');
        if (regex.test(inputPassword)) {
            console.log(true);
            passRegex.innerText='';
        } else {
            console.log(false);
            passRegex.innerText = 'Password must contain uppercase letters or characters (+-/*)';
        }
};
const regexEmail = new RegExp(/[@]/);
const checkEmail = function () {
    let inputEmail = document.getElementById('inputEmail').value;
    let passRegex = document.getElementById('emailRegex');
    if (regexEmail.test(inputEmail)) {
        console.log(true);
        passRegex.innerText='';
    } else {
        console.log(false);
        passRegex.innerText = 'Example: "email@gmail.com" ';
    }
};