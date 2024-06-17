import form from "../components/form.js";

export class LoginBusinessContainer {
  constructor(data) {
    this.data = {
      id: "login-form",
      inputs: [
        {
          id: "email",
          name: "email",
          type: "email",
          placeholder: "Entrez votre email",
        },
        {
          id: "password",
          name: "password",
          type: "password",
          placeholder: "Entrez votre email",
        },
      ],
      buttons: [
        {
          id: "submit-button",
          name: "submit-button",
          type: "submit",
          textContent: "Réinitialiser",
        },
      ],
    };

    const loginMain = document.getElementById("login-main");
    loginMain.innerHTML += form(this.data);
    const loginForm = document.getElementById("login-form");
    const self = this;
    loginForm.onsubmit = (e) => self.onSubmit(e);
    loginForm.addEventListener("reset", function () {
      self.onReset();
    });
  }

  onSubmit(e) {
    e.presentDefault();
    console.log("Cliquez sur le formulaire");
  }
  onReset() {
    console.log("Reset le formulaire");
  }
}
export default LoginBusinessContainer;
