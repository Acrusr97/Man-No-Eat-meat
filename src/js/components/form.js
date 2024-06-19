import button from "./button.js"
import input from "./input.js"

const form = function (data){
    
    return (
        `
        <form class ="form" id="${data.formId}">
        <section>
        ${data.inputs.map(ainp => input(ainp))}
        </section>
        <section>
        ${data.buttons.map(abut => button(abut))}
        </section>
        
        </form>
        `
    );
}
export default form