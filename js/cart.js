/*JavaScript coming soon!*/
let container = document.querySelector(".container");
let form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());

  console.log(dataObj);

  let name = dataObj.name;
  let userEmail = dataObj.userEmail;

  let password = dataObj.password;

  let message = `Welcome ${name}! You are logged in! `;

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
}
