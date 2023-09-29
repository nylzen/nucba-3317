const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

/*------ Funciones auxiliares ----- */
// Funcion para checkear si el campo esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Funcion para validar si el largo del input esta entre un numero y otro
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

// Regex para validar el email
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // Testear
  return re.test(input.value.trim());
};

// Funcion para revisar si el email lo tenemos guardado
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Funcion para verificar la contrasena
const isPassSecure = (input) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  return re.test(input.value.trim());
};

// Funcion para verificar el telefono
const isPhoneValid = (input) => {
  const re = /^[0-9]{10}$/;

  return re.test(input.value.trim());
};

// Funcion para mostrar el error al validar el input
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

// Funcion para cuando todo esta bien
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};

/*------ Funciones Para validar inputs ----- */

// Funcion para validar el name
const checkInput = (input) => {
  // aca va el codigo a checkear
  let valid = false;
  const MIN_CHARACTERS = 3;
  const MAX_CHARACTERS = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isBetween(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    showError(
      input,
      `Este campo debe tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar el email
const checkEmail = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El email es obligario");
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, "El email no es valido");
    return;
  }

  if (isExistingEmail(input)) {
    showError(input, "El email ya esta registrado");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar la pass
const checkPassword = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "La pass es obligaria");
  }

  if (!isPassSecure(input)) {
    showError(
      input,
      "La pass debe tener al menos 8 caracteres, una mayuscula, una minuscula y simbolo"
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar telefono
const checkPhone = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El telefono es obligario");
    return;
  }

  if (!isPhoneValid(input)) {
    showError(input, "El telefono no es valido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar el formulario
const validateForm = (e) => {
  e.preventDefault();

  let isNameValid = checkInput(nameInput);
  let isLastNamevalid = checkInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNamevalid &&
    isEmailValid &&
    isPasswordValid &&
    isPhoneValid;

  if (isValidForm) {
    users.push({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passInput.value,
      phone: phoneInput.value,
    });
    saveToLocalStorage(users);
    alert("Te logueaste bien");
    window.location.href = "login.html";
  }
};

// Funcion init
const init = () => {
  nameInput.addEventListener("input", () => checkInput(nameInput));
  lastNameInput.addEventListener("input", () => checkInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
  phoneInput.addEventListener("input", () => checkPhone(phoneInput));
  registerForm.addEventListener("submit", validateForm);
};

init();
