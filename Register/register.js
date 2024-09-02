const registerForms = document.querySelectorAll(".register-form");
let step = 1;
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
function main() {
  const currentRegisterForm = registerForms[step - 1];
  const currentSubmitBtn = currentRegisterForm.querySelector(".submit-btn");
  currentSubmitBtn.addEventListener("click", () => {
    step++;
    if (step > registerForms.length) {
      step = 1;
    }
    addStepToBody();
  });
}
main();
