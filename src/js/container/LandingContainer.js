class LandingContainer {
    constructor(onNavigate){
        this.onNavigate= onNavigate
    

    const landingLoginBut = document.getElementById('landing-login-button')

    landingLoginBut.onclick = (e) =>this.onClick ('landing-login-button')

    const landingRegisterBut =document.getElementById('landing-register-button')

    landingRegisterBut.onclick = (e) => this.onClick('landing-register-button')

    
}
onClick(buttonId){
    if (buttonId =="landing-login-button"){
        console.log("but log check")
    }else {
     console.log ("check inscription but")   
    }
}
}
export default LandingContainer