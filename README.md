# Assignment #5: JavaScript Basics (DOM Manipulation & Events)

**Student Name:** Sayazhan Berdibayeva  
**Group:** IT-2501
**GitHub Repository:** https://berdibayevaaa.github.io/JavaScript-Basics-DOM-Manipulation-Events-/



## Part 1: Profile Object, Data Types & Arithmetic

### Task 1: The Personal Info Object
Created a `const` object named `userProfile` storing multiple data types: `string` (name), `number` (birthYear), `boolean` (isDeveloper), and an `array` (hobbies).
<img width="706" height="506" alt="image" src="https://github.com/user-attachments/assets/5d24d717-f05a-4cc9-8cbb-38c00ad95de3" />

### Task 2: Arithmetic Calculations
Calculated the dynamic age using arithmetic subtraction (`currentYear - userProfile.birthYear`), calculated total months lived (`age * 12`), and tracked total hobbies count (`userProfile.hobbies.length`). All values were logged into the console.
<img width="831" height="675" alt="image" src="https://github.com/user-attachments/assets/0e5229f7-2b32-4474-89e6-086a4cd9c21e" />


## Part 2: Form Input & Event Responses
<img width="695" height="671" alt="image" src="https://github.com/user-attachments/assets/2639cf90-6a19-45b2-b104-70ac512c9b34" />


### Task 3: HTML Form Setup
Set up interactive input fields for Username, Birth Year, and a "Create / Update Profile" button.
<img width="923" height="1015" alt="image" src="https://github.com/user-attachments/assets/93b6adf7-a8a1-44b7-9715-079d4ba0a0a9" />

### Task 4: Event Listener
Added a `click` event listener to the button. When clicked, it captures values from the input fields, updates the `userProfile` object, and immediately updates the DOM view.
<img width="996" height="899" alt="image" src="https://github.com/user-attachments/assets/6cdfb1b1-b38b-429d-9622-b0b942b92579" />



## Part 3: DOM List Manipulation
<img width="1120" height="946" alt="image" src="https://github.com/user-attachments/assets/c82592d6-53ae-4078-a562-1cf3d7618c96" />

### Task 5: Creating & Removing Elements
Implemented an unordered list (`<ul>`) for hobbies. 
- The **"Add Item"** button dynamically creates a new `<li>` element via `document.createElement()` and appends it to the list.
- The **"Remove Item"** button deletes the last item from the list using `removeChild()`.

<img width="932" height="879" alt="image" src="https://github.com/user-attachments/assets/c247f7b9-1488-424f-ac61-ac59cc1cef9b" />


## Summary of Work Process
1. Configured the document structure and basic input elements in HTML.
2. Initialized user data within an object and applied arithmetic operators for dynamic calculations.
3. Implemented event-driven DOM updates using `addEventListener` to synchronize input fields with JavaScript objects.
4. Used DOM manipulation methods (`createElement`, `appendChild`, `removeChild`) to dynamically add and remove list items.
5. Deployed the application to GitHub Pages and verified all features.
