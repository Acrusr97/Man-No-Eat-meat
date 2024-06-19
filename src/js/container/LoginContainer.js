import AuthLog from "../services/AuthLog.js";


 class LoginContainer {

  constructor (){
    const form=document.getElementById('login-form')
    form.onsubmit =(e) => this.onSubmit(e)  
  }

  onSubmit(e){
   e.preventDefault();
    const email=document.getElementById ('email');
    const password=document.getElementById('password');
    const emailValue=email.value
    const passwordValue=password.value
    const passwordError=document.getElementById('password-error')
    const emailError=document.getElementById('email-error')
    
      if (!emailValue) {
        emailError.innerText = "Veuillez entrer un identifiant";
        return;
      }

      if (!passwordValue) {
        passwordError.innerText = "Veuillez entrer le mot de passe";
        return;
      }
      passwordError.innerText = emailError.innerText = "";
      console.log(emailValue, passwordValue);
      
      AuthLog.login({email:email.Inputs , password:password.Inputs })
      .then(
        (result) => {
          if(result){
            setTimeout(() => {
              window.location.hash = "";
            }, 2000);   

          }
        }
      );
  }
}
 

export default LoginContainer;