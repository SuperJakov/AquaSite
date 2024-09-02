const keypass = document.querySelector(".keypass");
const login = document.querySelector(".login");

keypass.addEventListener("click", () => {
  const alert = new CustomAlert("In progress...");
  if (alert.alreadyShown()) {
    return;
  }
  alert.show();
});

login.addEventListener("click", () => {
  const alert = new CustomAlert("In progress...");
  if (alert.alreadyShown()) {
    return;
  }
  alert.show();
});
class CustomAlert {
  constructor(message) {
    this.message = message;
  }

  show() {
    if (this.alreadyShown()) {
      return;
    }

    const alertElement = document.createElement("div");
    alertElement.classList.add("alert");
    const alertParagraph = document.createElement("p");
    alertParagraph.textContent = this.message;
    alertElement.appendChild(alertParagraph);
    document.body.appendChild(alertElement);

    setTimeout(() => {
      alertElement.classList.add("fade-out");
      setTimeout(() => {
        alertElement.remove();
      }, 1000);
    }, 3000); // Show the alert for 3 seconds before fading out
  }

  alreadyShown() {
    return !!document.querySelector(".alert");
  }
}
