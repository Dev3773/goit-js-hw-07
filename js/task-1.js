const categoriesRef = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesRef.children.length}`);

const itemRef = [...categoriesRef.children];

itemRef.forEach(title => {
  console.log(`\nCategory: ${title.firstElementChild.textContent}`);
  console.log(`Elements ${title.lastElementChild.children.length}`);
});