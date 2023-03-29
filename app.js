const signUp = document.getElementById("signUp");
const cancel = document.getElementById("cancel");
const update = document.getElementById("update");
const login = document.getElementById("login");

signUp.addEventListener("click", (e) => {
  if (e.target.id === "signUp") {
    window.location.href = "https://mjmealey.github.io/sign-up-form/";
  }
});

cancel.addEventListener("click", (e) => {
  if (e.target.id === "cancel") {
    window.location.href = "https://mjmealey.github.io/confirmAccount/";
  }
});

update.addEventListener("click", (e) => {
  if (e.target.id === "update") {
    window.location.href = "https://thunderous-sunburst-d4f8e7.netlify.app/";
  }
});

login.addEventListener("click", (e) => {
  if(e.target.id === "login"){
  	window.location.href="https://mjmealey.github.io/login-page/"
    
  }
})
