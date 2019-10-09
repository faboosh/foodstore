
// Creating eventListener for our 3 different kind of buttons. 
const backButton = document.getElementsByClassName("back");
[...backButton].forEach(function(button){
    button.addEventListener("click", () => {
        document.getElementById("front-page").style.display = "grid";
        document.getElementById("login-page").style.display = "none";
        document.getElementById("register-page").style.display = "none";
    });
});

const signUpButton = document.getElementsByClassName("sign-up");
[...signUpButton].forEach(function(button){
    button.addEventListener("click", () => {
    document.getElementById("register-page").style.display = "grid";
    document.getElementById("front-page").style.display = "none";
    document.getElementById("login-page").style.display = "none";
    });
});

const logInButton = document.getElementsByClassName("login");
[...logInButton].forEach(function(button){
    button.addEventListener("click", () => {
    document.getElementById("login-page").style.display = "grid";
    document.getElementById("front-page").style.display = "none";
    document.getElementById("register-page").style.display = "none";
    });
});


