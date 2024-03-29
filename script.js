const pass = document.querySelector("#password");
const confPass = document.querySelector("#conf-password");
// const confButton = document.querySelector("button");
const form = document.querySelector("form");
const validationText = document.createElement("p");
validationText.textContent = "* Passwords do not match";
validationText.className = "pass-error";

form.addEventListener("submit", (event) => {
  if (pass.value !== confPass.value) {
    pass.setAttribute("isValid", false);
    confPass.setAttribute("isValid", false);

    event.preventDefault();
    pass.parentNode.insertBefore(validationText, pass.nextSibling);
  }
});
