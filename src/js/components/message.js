import affiApp from "./affiApp";
import paragraph from "./paragraph";

const message = function (data) {
  return `
            <section class="message">
                ${affiApp(data.affiApp)}
                <section>
                    ${paragraph(data.content)}
                </section>
            </section>
        
        `;
};

export default message;