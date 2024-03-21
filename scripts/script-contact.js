"use strict";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var isValid = validateForm();

  if (isValid) {
    var formData = new FormData(this);

    fetch("https://getform.io/f/34becda1-3ed4-4bdd-9aa8-244a981dd8c7", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          document.querySelector(".submit__message").textContent =
            "Successfully sent!";
        } else {
          document.querySelector(".submit__message").textContent =
            "Error submitting form. Please try again later.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.querySelector(".submit__message").textContent =
          "Error submitting form. Please try again later.";
      });
  }
  document.getElementById("username").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
});

function validateForm() {
  var name = document.getElementById("username").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var email = document.getElementById("email").value.trim();
  var isValid = true;

  // Validate name
  if (name === "") {
    document.querySelector(".errorMessageName").textContent =
      "Name is required.";
    isValid = false;
  } else {
    document.querySelector(".errorMessageName").textContent = "";
  }

  // Validate phone number
  if (!/^\d{10}$/.test(phone)) {
    document.querySelector(".errorMessagePhone").textContent =
      "Please enter a valid phone number.";
    isValid = false;
  } else {
    document.querySelector(".errorMessagePhone").textContent = "";
  }

  // Validate email
  if (!/\S+@\S+\.\S+/.test(email)) {
    document.querySelector(".errorMessageEmail").textContent =
      "Please enter a valid email address.";
    isValid = false;
  } else {
    document.querySelector(".errorMessageEmail").textContent = "";
  }

  return isValid;
}
