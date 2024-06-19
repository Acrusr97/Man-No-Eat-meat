class RegisterAppCon {
    constructor(){
        const form=document.getElementById("register-form");
        const self=this;
        form.onsubmit= function(e) {
            self.onSubmit(e);
        };
    }
    onSubmit(e){
        e.preventDefault();
        const email =document.getElementById("email");
        const password =document.getElementById("password");
        const confirmedPass =document.getElementById("confirmed-Password");

        const emailError =document.getElementById("email-error");
        const passwordError =document.getElementById("password-error");
        const confirmedPassErr =document.getElementById("confirmed-password-error");
   
        const emailValue =email.value;
        const passwordValue = password.value;
        const confirmedPassValue = confirmedPass.value;
        if (!emailValue){
            emailError.innerText ="Veuillez rentrer vos identifiants";
            return;
        }
        if (!passwordValue){
            passwordError.innerText ="Veuillez rentrer votre mot de passe";
            return;
        } if (!confirmedPassValue){
            confirmedPassValue.innerText="Veuillez confirmer le mot de passe";
            return;
        } 
       console.log(emailValue,passwordValue);

        }
}   

export default RegisterAppCon