const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const tergetValue = ((event) => {
  const inputValue = event.currentTarget.value.trim();
  outputRef.textContent = inputValue || "Anonymous";
});

inputRef.addEventListener("input", tergetValue);
