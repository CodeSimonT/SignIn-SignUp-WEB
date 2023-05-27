const button = document.querySelector("#buttonP");
const form = document.querySelector("#passForm");
// container
let validationContainer = {
  lastNameValidation: false,
  firstNameValidation: false,
  middleNameValidation: false,
  emailInputValidation: false,
  phoneInputValidation: false,
  addressInputValidation: false,
  BarangayInValidation: false,
  cityInputValidation: false,
  proviceInputValidation: false,
  zipInputValidation: false,
};

// button
button.addEventListener("click", () => {
  lastname();
  firstname();
  middlename();
  emailValidate();
  phoneNumber();
  addressValidate();
  barangayValidation();
  cityValidate();
  provinceValidate();
  zipValidate();

  // validation
  buttonValidatin();
});

// all the functions for validation

// last name function validation
function lastname() {
  const input = document.querySelector("#lastName");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Last Name";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.lastNameValidation = true;
  }
}

// first name function validation
function firstname() {
  const input = document.querySelector("#firstname");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else if (input.value.length < 8) {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Min. char 8";
  } else {
    input.nextElementSibling.innerText = "First Name";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.firstNameValidation = true;
  }
}

// middle name function validation
function middlename() {
  const input = document.querySelector("#middlename");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else if (input.value.length < 8) {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Min. char 8";
  } else {
    input.nextElementSibling.innerText = "Middle Name";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.middleNameValidation = true;
  }
}

// email validation
function emailValidate() {
  // email format
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let input = document.querySelector("#emailvalidate");

  if (!input.value.match(mailformat)) {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "simonPogi@.com";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.classList.remove("is-invalid");
    input.nextElementSibling.innerText = "Email";
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.emailInputValidation = true;
  }
}

// phone number function validation
function phoneNumber() {
  const input = document.querySelector("#phoneValidate");
  console.log(input.value.length);
  if (input.value.length < 11 || input.value.length > 11) {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need 11 numbers";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Phone Number";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.phoneInputValidation = true;
  }
}

// Address function validation
function addressValidate() {
  const input = document.querySelector("#addressValidate");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Address";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.addressInputValidation = true;
  }
}

// barangay function validation
function barangayValidation() {
  const input = document.querySelector("#barangayValidate");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Barangay";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.BarangayInValidation = true;
  }
}

// city function validation
function cityValidate() {
  const input = document.querySelector("#cityValidate");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "City";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.cityInputValidation = true;
  }
}

// province function validtion
function provinceValidate() {
  const input = document.querySelector("#provinceValidation");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Province";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.proviceInputValidation = true;
  }
}

// zip code function validation
function zipValidate() {
  const input = document.querySelector("#zipValidate");

  if (input.value === "") {
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = "Need input";
    input.nextElementSibling.classList.add("validationDesign");
  } else {
    input.nextElementSibling.innerText = "Zip Code";
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("validationDesign");
    validationContainer.zipInputValidation = true;
  }
}
// end of function validation

// submit validation
function buttonValidatin() {
  let formValidation = Object.values(validationContainer).every(
    (item) => item === true
  );
  if (formValidation) {
    form.submit();
  }
}
