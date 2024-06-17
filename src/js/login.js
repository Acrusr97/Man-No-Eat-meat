const form = document.getElementById("form");
form.onsubmit = function (e) {
  e.preventDefault();
  console.log("nous somme dedans");
};
const input = document.getElementById("email");
input.addEventListener("input", function (e) {
  console.log("caractère inséré par l'utilisateur : ", e.target.value);

  console.log("nous somme dedans");
});

const inputp = document.getElementById("password");
inputp.addEventListener("input", function (e) {
  console.log("caractère inséré par l'utilisateur : ", e.target.value);

  console.log("nous somme dedans");
});
