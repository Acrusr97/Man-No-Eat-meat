const registerApp = function () {
    const data = {
        formId: "register-form",
        inputs: [
          {
            id: "email",
            type: "email",
            placeholder: "Entrez votre email",
          },
          {
            id: "password",
            type: "password",
            placeholder: "Entrez votre mot de passe",
          },
          {
            id: "confirmed-password",
            type: "password",
            placeholder: "Confirmez votre mot de passe",
          },
        ],
        buttons: [
          {
            type: "submit",
            id: "submit",
            content: "Valider",
          },
          {
            type: "reset",
            id: "reset",
            content: "Réinitialiser",
          },
        ],
      };
    
      return `
    
            <main class="main login__main">
                <section>
                  ${form(data)}
                </section>
                <section>
                  <small>Déjà inscrit(e) ? Connectez-vous <a href="#login">ici</a> </small>
                </section>
     
            </main>   
        
    
            `;
};
export default registerApp;