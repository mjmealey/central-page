const signUp = document.getElementById("signUp");
const cancel = document.getElementById("cancel");

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
