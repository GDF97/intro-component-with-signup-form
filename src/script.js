const btnSendForm = document.getElementById("sendForm");
const errorMessages = document.querySelectorAll(".errorMessage");
const errorIcon = document.querySelectorAll(".errorIcon");
const successMessage = document.querySelector(".success-message");
let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let emailAddress = document.getElementById("emailAddressInput");
let password = document.getElementById("passwordInput");
let emailDisplay = document.getElementById("emailSend");

const ValidadeEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

btnSendForm.addEventListener("click", (e) => {
  e.preventDefault();
  let errorCheck = false;
  if (firstName.value == "") {
    errorMessages[0].style.display = "flex";
    errorIcon[0].style.display = "flex";
    firstName.style.borderColor = "red";
    errorCheck = true;
  }

  if (lastName.value == "") {
    errorMessages[1].style.display = "flex";
    errorIcon[1].style.display = "flex";
    lastName.style.borderColor = "red";
    errorCheck = true;
  }

  if (emailAddress.value == "") {
    console.log("teste");
    errorMessages[2].style.display = "flex";
    errorIcon[2].style.display = "flex";
    emailAddress.style.borderColor = "red";
    errorCheck = true;
  }

  if (emailAddress.value != "" && !ValidadeEmail(emailAddress.value)) {
    alert(`"${emailAddress.value}" is not a valid email!`);
    errorCheck = true;
  }

  if (password.value == "") {
    errorMessages[3].style.display = "flex";
    errorIcon[3].style.display = "flex";
    password.style.borderColor = "red";
    errorCheck = true;
  }

  if (errorCheck == false) {
    successMessage.classList.add("active");
    emailDisplay.textContent = `Thank you ${firstName.value}`;
    firstName.value = "";
    lastName.value = "";
    emailAddress.value = "";
    password.value = "";
    firstName.style.borderColor = "#b9b6d3";
    lastName.style.borderColor = "#b9b6d3";
    emailAddress.style.borderColor = "#b9b6d3";
    password.style.borderColor = "#b9b6d3";
    errorMessages.forEach((msg) => (msg.style.display = "none"));
    errorIcon.forEach((icon) => (icon.style.display = "none"));
  }
});

function closeMessage() {
  successMessage.classList.remove("active");
}
