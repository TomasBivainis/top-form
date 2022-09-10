const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const errorMessage = document.querySelector('#errorMessage');

password.addEventListener('input', checkIfPasswordMatch);
confirmPassword.addEventListener('input', checkIfPasswordMatch);

function checkIfPasswordMatch() {
  if((password.value === confirmPassword.value && password.classList.contains("error")) && password.value !== '') {
    password.classList.toggle("error");
    confirmPassword.classList.toggle('error');
    errorMessage.classList.toggle('hidden');
  }
  else if (password.value !== confirmPassword.value && !password.classList.contains("error")){
    password.classList.toggle("error");
    confirmPassword.classList.toggle('error');
    errorMessage.classList.toggle('hidden');
  }
}