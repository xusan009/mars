const form = document.querySelector("form");
const input = document.querySelector("input");
const karobka = document.querySelector("ul");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let qiymat = input.value;
  let yeguvchi = document.createElement("li");
  yeguvchi.innerHTML = qiymat;
  karobka.append(yeguvchi);
});
