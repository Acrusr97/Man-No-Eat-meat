import nav from "../components/nav.js";

const header = function () {
  return(
    `
    <header class="header App__header">
    <a href="/"> 
    Bienvenue chez Man No Eat Meat
     </a>
     ${nav()}
    </header>
    `);
};
export default header;
