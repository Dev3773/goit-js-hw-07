function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





















const inputNumber = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

let nameInput;

const targetValue = ((event) => {
  nameInput = event.currentTarget.value;
});

inputNumber.addEventListener("input", targetValue);

function createBoxes(amount) {
  if (amount < 1) {
    alert("Please enter a number greater than or equal to 1.");
    return;
  }

  let size = 30;
 
  for (let i = 0; i < amount; i += 1) {
    const boxCountInput = document.createElement("div");
    boxCountInput.classList.add("boxes__item");
    boxCountInput.style.width = `${size}px`;
    boxCountInput.style.height = `${size}px`;
    boxCountInput.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(boxCountInput);

    size += 10;
  }
}

const numberCreate = (() => {
  if (nameInput && !isNaN(nameInput)) {
    createBoxes(nameInput);
  } else {
    alert("Please enter a valid number.");
  }
});

const destroyBoxes = (() => boxesRef.innerHTML = '');

buttonCreate.addEventListener("click", numberCreate);
buttonDestroy.addEventListener("click", destroyBoxes);