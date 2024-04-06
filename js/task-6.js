function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add("boxes__item");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(box)
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

const inputNumber = document.querySelector("input[type='number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const readValue = () => {
  const amount = Number(inputNumber.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
  inputNumber.value = '';
};

buttonCreate.addEventListener("click", readValue);

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});




