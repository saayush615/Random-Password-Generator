const passwordBox = document.getElementById("Password");
const length = 12;

const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=[];',./{}|:<>?";

function createPassword(){
    let Password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * character.length);
        Password += character[randomIndex];
    }
    passwordBox.value = Password;
}

function copyPassword(){
    const password = passwordBox.value;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
}