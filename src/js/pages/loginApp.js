import affiApp from "../components/affiApp.js";
import button from "../components/button.js"
import form from "../components/form.js"
import input from "../components/input.js"


const loginApp = function(){
const data = {
    isLoginFrom: true,
    inputs : {
        email:{
            placeholder:'Entrez votre email',
            type:'email',
            id:'email',
        },
        email:{
            placeholder:'Entrez votre password',
            type:'password',
            id:'password',
        },
    },
    buttons: {
        submit:{
           
            type:'submit',
            id:'submit',
            content:'Valider',
        },
       reset: {
            type:'reset',
            id:'reset',
            content:'Réinitialiser',
        },
    }
};


return (
    `
    <main class="main loging__main">
        ${affiApp('Man No Eat Meat | Login')}
        <section>
        ${form(data)}
        </section>
        <section>
        <small> <a href="#register">here</a>
        </small>
        </section>
        </main>
    `
);
};
export default loginApp
