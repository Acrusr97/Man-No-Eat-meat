import affiApp from "../components/affiApp.js"
import button from "../components/button.js"


const landingApp =function () {
    const messageData ={
         imageUrl:'https://videos.pexels.com/video-files/4328534/4328534-uhd_3840_2160_25fps.mp4',
        imageAlt:'Video généré par internet',
        footerContent :'Tous est bon chez Man No Eat Meat ',
        headerContent :'Vous etes chez Man No Eat Meat'

    }
    return(
        `
        <main class=" main landing__main" id="login">
        ${titleApp ('Man No Eat Meat | Landing')}
        <section>
        ${affiApp(messageData)}
        </section>
        <footer>
        <a href=#login app__landing>
        ${button({id:'landing-register-button', content:'Inscrivez-vous', type:'button'})}
           <i
            class="fa-solid fa-person-through-window fa-beat-fade"
            style="--fa-primary-color: #ff0000; --fa-secondary-color: #ff0000"></i>        
        </a>
        <a href=#registery app__landing>
        ${button({id:'landing-register-button', content:'Inscrivez-vous', type:'button'})}
           <i
            class="fa-solid fa-person-through-window fa-beat-fade"
            style="--fa-primary-color: #ff0000; --fa-secondary-color: #ff0000"></i>        
        </a>
        <a href="/">
        ${button({id:'submit-register-button', content:'', type:'button'})}
            <i class="fa-solid fa-user fa-beat-fade" style="color: #63e6be"></i>
        </a>
        </footer>
        </main>
        
        `
    
)
}
export default landingApp