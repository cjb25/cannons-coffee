/*JavaScript coming sson!*/
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
  let telNo = dataObj.telNo;
  let comments = dataObj.comments;
  let coffee = dataObj.coffee;
  let option = dataObj.option;

  let message = `Hi ${name}! We recieved your request ${option};, and wanted to thank you for reaching out. We will be calling you at ${telNo} within the next 24 hrs. Please be sure to check your ${userEmail} inbox for a ${coffee} on us! We appreciate your deatalied coment and look forward to discussing ${comments} with you soon. - The Cannons Coffee Team`;

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
}
