/*const LSUBOUTTON =document.querySelectorById('login-submit-button');
const LGOBUTTON =document.querySelectorById('log-out-button');
const LGFBUTTON =document.querySelectorById('log-off-button');*/

import input from "./input.js";
import {submitButton} from "./button.js";
export default function (data){
    return(
        `
        <form id="${data.id}" class"form">
          <section>
               ${data.inputs.map((el,index) => input(el)).join('')}

         </section>
          <section>
              ${data.inputs.map((el,index) => submitButton(el)).join('')}

          </section>

        </form>
        `
    )
}
