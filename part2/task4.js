const userProfile = {
  name: "Alikhan",
  birthYear: 2005,
  isDeveloper: true,
  hobbies: ["Coding", "Chess"]
};

const updateProfileBtn = document.getElementById("updateProfileBtn");
const usernameInput = document.getElementById("usernameInput");
const birthYearInput = document.getElementById("birthYearInput");

const displayName = document.getElementById("displayName");
const displayBirthYear = document.getElementById("displayBirthYear");
const displayAge = document.getElementById("displayAge");

displayName.textContent = userProfile.name;
displayBirthYear.textContent = userProfile.birthYear;
displayAge.textContent = 2026 - userProfile.birthYear;

updateProfileBtn.addEventListener("click", () => {
  userProfile.name = usernameInput.value;
  userProfile.birthYear = Number(birthYearInput.value);

  displayName.textContent = userProfile.name;
  displayBirthYear.textContent = userProfile.birthYear;
  displayAge.textContent = 2026 - userProfile.birthYear;

  console.log(userProfile);
});