import button from "./button.js";
import paragraph from "./paragraph.js";
const landingMain = document.getElementById("container");

landingMain.innerHTML =
  paragraph("waaaaododkdjd") +
  paragraph("fdfsfsdfdsfdfdfdfdfsfdfsd") +
  button((id = "Login"), (type = "submit"));
