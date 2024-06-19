import LandingContainer from "./src/js/container/LandingContainer.js";
import LoginBusinessContainer from "./src/js/container/LoginContainer.js"
import header from "./src/js/layourt/header.js";
import messageApp from "./src/js/layourt/messageApp.js";
import landingApp from "./src/js/pages/landingapp.js";
import loginApp from "./src/js/pages/loginApp.js";
import registerApp from "./src/js/pages/registerApp.js";
import AuthLog from "./src/js/services/AuthLog.js";


const container = document.getElementById("container")
        window.onpopstate = () => {AppNav(window.location.hash)}
    const AppNav = function (hash){
    switch (hash) {
        case"/":
        container.innerHTML=""
        container.innerHTML += header();
        console.log("header")
        break;
        case"#loginApp":
        container.innerHTML += AuthLog()
        container.innerHTML += messageApp()
        new LoginContainer()
        break;  
        case"#landingapp":
        container.innerHTML += LandingContainer
        container.innerHTML += messageApp()
        new LoginContainer()
        break;
        
        case"#registerApp":
        console.log('registerApp')
        container.innerHTML += registerApp()
        container.innerHTML += messageApp()
        new LoginContainer()
        break;
        
    }
};
AppNav(window.location.hash);