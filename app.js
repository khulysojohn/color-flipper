// Random color names script
const colorNames = [
  "White", "Gold", "Aqua", "Brown", "Silver", "Green", "Yellow", "Red", "Khaki", "Orange", 
  "Blue", "Black", "Gray", "Pink", "GreenYellow", "Lime", "Chartreuse", "DarkGreen", "Olive", "Teal",
  "Crimson", "DarkRed", "DeepPink", "PaleVioletRed", "Coral", "Tomato", "OrangeRed", "LemonChiffon", "Moccasin"
];

const btn1 = document.getElementById("btn1");
const color1 = document.querySelector(".color1");
const copyBtn1 = document.getElementById("copyBtn1");

btn1.addEventListener("click", () => {
  const randomNumber = getRandomNumber(colorNames.length);
  const selectedColor = colorNames[randomNumber];
  document.body.style.backgroundColor = selectedColor;
  color1.textContent = selectedColor;
});

copyBtn1.addEventListener("click", () => {
  copyToClipboard(color1.textContent);
});

// Hex color script
const hexValues = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
const btn2 = document.getElementById("btn2");
const color2 = document.querySelector(".color2");
const copyBtn2 = document.getElementById("copyBtn2");

btn2.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
      hexColor += hexValues[getRandomNumber(hexValues.length)];
  }
  document.body.style.backgroundColor = hexColor;
  color2.textContent = hexColor;
});

copyBtn2.addEventListener("click", () => {
  copyToClipboard(color2.textContent);
});

// RGB color script
const rgbColors = [
  "rgb(205, 92, 92)", "rgb(220, 20, 60)", "rgb(255, 0, 0)", "rgb(139, 0, 0)", "rgb(255, 192, 203)", 
  "rgb(255, 20, 147)", "rgb(219, 112, 147)", "rgb(255, 160, 122)", "rgb(255, 127, 80)", "rgb(255, 99, 71)",
  "rgb(255, 165, 0)", "rgb(255, 215, 0)", "rgb(255, 255, 255)", "rgb(255, 250, 250)", "rgb(240, 255, 240)"
];

const btn3 = document.getElementById("btn3");
const color3 = document.querySelector(".color3");
const copyBtn3 = document.getElementById("copyBtn3");

btn3.addEventListener("click", () => {
  const randomNumber = getRandomNumber(rgbColors.length);
  const selectedColor = rgbColors[randomNumber];
  document.body.style.backgroundColor = selectedColor;
  color3.textContent = selectedColor;
});

copyBtn3.addEventListener("click", () => {
  copyToClipboard(color3.textContent);
});

// Generate random number
function getRandomNumber(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

// Function to copy color to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
      alert('Color copied to clipboard: ' + text);
  }).catch(err => {
      console.error('Failed to copy: ', err);
  });
}

// Function to show sections based on user choice
function showSection(sectionId) {
  // Hide all sections first
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
