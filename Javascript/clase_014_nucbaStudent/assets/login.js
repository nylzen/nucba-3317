const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToSessionStorage = (user) => {
  sessionStorage.setItem("activeUser", JSON.stringify(user));
};

// Funcion para validar que el campo no este vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Funcion para validar que el email exista
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Funcion para validar si la contrasena que ingresamos es igual con la que se registro el email
const isMatchingPass = (input) => {
  const user = users.find((user) => user.email === emailInput.value.trim());

  return user.password === input.value.trim();
};

// Funcion para mostrar el error en el UNICO small que tenemos en el form
const showError = (message) => {
  errorMessage.textContent = message;
};

// Funcion para validar estos dos campos
/*
    -1. Chequear si el campo del email esta vacio
    -2. Chequear si el email que ingresamos existe en el array del LS
    -3. Chequear si el campo de password esta vacio
    -4. Chequear que la contrasena coincida
    Si pasa todo esto es porque esta joya
*/
const isValidAccount = () => {
  let valid = false;

  if (isEmpty(emailInput)) {
    showError("Por favor, completa los campos");
    return;
  }

  if (!isExistingEmail(emailInput)) {
    showError("El email ingresado no es valido");
    return;
  }

  if (isEmpty(passInput)) {
    showError("Por favor, completa los campos");
    return;
  }

  if (!isMatchingPass(passInput)) {
    showError("Los datos ingresados son incorrectos");
    loginForm.reset();
    return;
  }

  alert("Ya estas en linea");
  valid = true;
  errorMessage.textContent = "";
  return valid;
};

const login = (e) => {
  e.preventDefault();

  // Debug 🐞
  //   console.log(users.find((user) => user.email === emailInput.value));
  //   console.log(emailInput.value);

  if (isValidAccount()) {
    const user = users.find((user) => user.email === emailInput.value.trim());
    saveToSessionStorage(user);
    window.location.href = "../pages/home.html";
  }
};

const init = () => {
  loginForm.addEventListener("submit", login);
};

init();
