const btnLogin = document.querySelector("#login-btn");
const btnRegister = document.querySelector("#register-btn");
const container = document.querySelector(".container");

btnRegister.addEventListener("click", () =>
  container.classList.add("register-mode")
);

btnLogin.addEventListener("click", () =>
  container.classList.remove("register-mode")
);
