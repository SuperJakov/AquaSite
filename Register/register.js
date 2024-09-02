const registerForms = document.querySelectorAll(".register-form");
const confirmationCodeElement = document.querySelector(".confirmation-code");
const resendConfirmationCodeBtn = document.querySelector(
  ".resend-confirmation-code"
);
let step = 1;
function handleUsernameAlert(message) {
  if (!message) {
    return registerForms[0].classList.remove("username-alert");
  }
  registerForms[0].classList.add("username-alert");
  const usernameAlertParagraph = document.querySelector(".username-alert-p");
  usernameAlertParagraph.textContent = message;
}
function handlePasswordAlert(message) {
  if (!message) {
    return registerForms[0].classList.remove("password-alert");
  }
  registerForms[0].classList.add("password-alert");
  const passwordAlertParagraph = document.querySelector(".password-alert-p");
  passwordAlertParagraph.textContent = message;
}
function resetValues(submitBtn) {
  handlePasswordAlert("");
  handleUsernameAlert("");
  confirmationCodeElement.value = "";
}
function addStepToBody() {
  const body = document.body;

  if (body.classList.contains("step1")) {
    body.classList.add("step2");
    body.classList.remove("step1");
  } else if (body.classList.contains("step2")) {
    body.classList.remove("step2");
    body.classList.add("step1");
  }
}
function checkIfStep1IsValid() {
  const registerForm = registerForms[0];
  const usernameInput = registerForm.querySelector(".username-input");
  const passwordInput = registerForm.querySelector(".password-input");
  const username = usernameInput.value;
  const password = passwordInput.value;
  usernameInput.value = username.trim();
  if (username.length < 3) {
    handleUsernameAlert("Username must be at least 3 characters long");
    return false;
  }
  if (username.length > 16) {
    handleUsernameAlert("Username must be at most 16 characters long");
    return false;
  }
  if (password.length < 8) {
    handlePasswordAlert("Password must be at least 8 characters long");
    return false;
  }
  return true;
}
function main() {
  const currentRegisterForm = registerForms[step - 1];
  const currentSubmitBtn = currentRegisterForm.querySelector(".submit-btn");
  resetValues(currentSubmitBtn);

  document.addEventListener("keydown", (event) => {
    if (step !== 1) return;

    if (checkIfStep1IsValid()) {
      handleUsernameAlert("");
      handlePasswordAlert("");
      return currentSubmitBtn.classList.add("possible");
    }
    currentSubmitBtn.classList.remove("possible");
  });
  currentSubmitBtn.addEventListener("click", () => {
    step++;
    if (step >= registerForms.length) {
      step = 1;
    }
    addStepToBody();
  });
}
main();
