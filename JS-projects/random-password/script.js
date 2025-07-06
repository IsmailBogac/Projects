const create = document.getElementById("createPassword");
const remove = document.getElementById("removePassword");
const password = document.getElementById("password");
const lengthInput = document.getElementById("lengthInput");

create.addEventListener("click", () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*.";
  const length = Number(lengthInput.value);
  let result = "";

  if (length < 8) {
    password.textContent = "Lütfen daha uzun bir değer giriniz";
    password.style.color="red";
  } else if (length > 16) {
    password.textContent = "Lütfen daha kısa bir değer giriniz";
    password.style.color = "red";
  } else {
    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    password.textContent = result;
    password.style.color = "green";
  }
});
