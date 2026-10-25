const itemList = document.getElementById("itemList");
const hobbyInput = document.getElementById("hobbyInput");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = hobbyInput.value;
  itemList.appendChild(newLi);

  hobbyInput.value = "";
});

removeItemBtn.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});