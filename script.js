const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Password do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
