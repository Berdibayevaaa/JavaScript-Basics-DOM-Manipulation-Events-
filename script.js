const userProfile = {
  name: "Sayazhan",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "Chess"]
};

let currentYear = 2026;
let age = currentYear - userProfile.birthYear;
let ageInMonths = age * 12;
let totalHobbies = userProfile.hobbies.length;

console.log(userProfile);
console.log(age);
console.log(ageInMonths);
console.log(totalHobbies);

const displayName = document.getElementById("displayName");
const displayBirthYear = document.getElementById("displayBirthYear");
const displayIsDev = document.getElementById("displayIsDev");
const displayAge = document.getElementById("displayAge");
const displayMonths = document.getElementById("displayMonths");
const displayHobbies = document.getElementById("displayHobbies");
const displayHobbiesCount = document.getElementById("displayHobbiesCount");

const updateProfileBtn = document.getElementById("updateProfileBtn");
const usernameInput = document.getElementById("usernameInput");
const birthYearInput = document.getElementById("birthYearInput");

const itemList = document.getElementById("itemList");
const hobbyInput = document.getElementById("hobbyInput");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

function renderProfile() {
  displayName.textContent = userProfile.name;
  displayBirthYear.textContent = userProfile.birthYear;
  displayIsDev.textContent = userProfile.isDeveloper;
  displayAge.textContent = currentYear - userProfile.birthYear;
  displayMonths.textContent = (currentYear - userProfile.birthYear) * 12;
  displayHobbies.textContent = userProfile.hobbies.join(", ");
  displayHobbiesCount.textContent = userProfile.hobbies.length;
}

function renderList() {
  itemList.innerHTML = "";
  for (let i = 0; i < userProfile.hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = userProfile.hobbies[i];
    itemList.appendChild(li);
  }
}

renderProfile();
renderList();

updateProfileBtn.addEventListener("click", () => {
  userProfile.name = usernameInput.value;
  userProfile.birthYear = Number(birthYearInput.value);

  renderProfile();
  console.log(userProfile);

  usernameInput.value = "";
  birthYearInput.value = "";
});

addItemBtn.addEventListener("click", () => {
  const newHobby = hobbyInput.value;
  if (newHobby !== "") {
    userProfile.hobbies.push(newHobby);
    
    const newLi = document.createElement("li");
    newLi.textContent = newHobby;
    itemList.appendChild(newLi);

    renderProfile();
    hobbyInput.value = "";
  }
});

removeItemBtn.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
    userProfile.hobbies.pop();
    renderProfile();
  }
});