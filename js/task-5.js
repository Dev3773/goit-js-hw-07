function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const hexColorRef = document.querySelector(".color");
const btnChangeColorRef = document.querySelector(".change-color");

const bgrClrBody = (() => {
  const newHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = newHexColor;
  hexColorRef.textContent = newHexColor;
});

btnChangeColorRef.addEventListener("click", bgrClrBody);