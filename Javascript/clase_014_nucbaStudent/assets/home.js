const logoutBtn = document.querySelector("#logout-message");
const userName = document.querySelector("#user-name");

// Nos traemos el usuario del session
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
console.log(activeUser);

const showUserName = () => {
  userName.textContent = `${activeUser.name} ${activeUser.lastName}`;
};

const logout = () => {
  if (window.confirm("Estas seguro que deseas cerrar sesion?")) {
    sessionStorage.removeItem("activeUser");
    window.location.href = "../index.html";
  }
};

// Funcion inicializadora
const init = () => {
  showUserName();
  logoutBtn.addEventListener("click", logout);
};

init();
