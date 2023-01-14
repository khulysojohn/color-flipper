const colors = ["White","Gold","Aqua","Brown","Silver","Green","Yellow","Red","Khaki","Orange",
"Blue","Black","Gray","Pink","GreenYellow","Lime","Chartreuse","DarkGreen","Olive","Teal",
"Crimson","DarkRed","DeepPink","	PaleVioletRed","Coral","Tomato","OrangeRed","LemonChiffon","Moccasin",
"Chartreuse","SpringGreen","	OliveDrab","	DarkCyan","	Turquoise","Aquamarine","Gainsboro"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}