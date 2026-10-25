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

console.log(age);
console.log(ageInMonths);
console.log(totalHobbies);