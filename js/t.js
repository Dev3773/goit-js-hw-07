function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input[type='number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const readValue = () => {
  const amount = +inputNumber.value;

  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // Спочатку видаляємо попередні блоки
    createBoxes(amount); // Потім створюємо нові блоки
  } else {
    alert('Будь ласка, введіть число від 1 до 100.');
  }
  inputNumber.value = ''; // Очищаємо значення input
};

buttonCreate.addEventListener("click", readValue);

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add("boxes__item");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(box);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = ''; // Видаляємо всі блоки
}
