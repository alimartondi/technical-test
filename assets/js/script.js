// ===-> Handle Company Profile Form <-===//
const companyProfileScriptURL =
  "https://script.google.com/macros/s/AKfycbxtG5GIrAPIKVYqYf_FX8UrDxa3WQyMWFiXHBzRaEvc66dvo0c5OWmr9qOSN3cic3Pj6A/exec";

const comprofAlertSucsess = document.querySelector(".comprof-alert-success");
const comprofAlertDanger = document.querySelector(".comprof-alert-danger");

const submitButton = document.getElementById("submitButton");
const companyProfileForm = document.forms["companyProfileForm"];

companyProfileForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitButton.classList.toggle("disabled");

  await fetch(companyProfileScriptURL, {
    method: "POST",
    body: new FormData(companyProfileForm),
  })
    .then((response) => {
      comprofAlertSucsess.classList.toggle("d-none");
      submitButton.classList.toggle("disabled");
      console.log("Success!", response);
    })
    .catch((error) => {
      comprofAlertDanger.classList.toggle("d-none");
      submitButton.classList.toggle("disabled");
      console.error("Error", error.message);
    });
  companyProfileForm.reset();
});

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", function () {
  const companyProfileForm = document.forms["companyProfileForm"];
  companyProfileForm.reset();
});

// ===-> Handle Ask Us Form <-===//
const askUsScriptURL =
  "https://script.google.com/macros/s/AKfycbwhwtQfEkV3CY_UEdsyoedyYp3gdUApuy8wdD0ufkg9aasR8B2jdmCBVTcvl0zyIpN2cg/exec";

const askUsForm = document.forms["askUsForm"];
const sendButton = document.querySelector(".send-button");
const sendingButton = document.querySelector(".sending-button");
const askusAlertSuccess = document.querySelector(".askus-alert-success");
const askUsAlertDanger = document.querySelector(".askus-alert-danger");

askUsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  sendButton.classList.toggle("d-none");
  sendingButton.classList.toggle("d-none");

  await fetch(askUsScriptURL, {
    method: "POST",
    body: new FormData(askUsForm),
  })
    .then((response) => {
      askusAlertSuccess.classList.toggle("d-none");
      sendButton.classList.toggle("d-none");
      sendingButton.classList.toggle("d-none");
      console.log("Success!", response);
    })
    .catch((error) => {
      askUsAlertDanger.classList.toggle("d-none");
      sendButton.classList.toggle("d-none");
      sendingButton.classList.toggle("d-none");
      console.error("Error", error.message);
    });
  askUsForm.reset();
});
