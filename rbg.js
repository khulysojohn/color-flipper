const colors = ["rgb(205, 92, 92)","rgb(220, 20, 60)","rgb(255, 0, 0)","rgb(139, 0, 0)","rgb(255, 192, 203)",
"rgb(255, 20, 147)","rgb(219, 112, 147)","rgb(255, 160, 122)","	rgb(255, 127, 80)","rgb(255, 99, 71)",
"	rgb(255, 165, 0)","	rgb(255, 215, 0)","rgb(255, 255, 255)","rgb(255, 250, 250)","rgb(240, 255, 240)",
"rgb(240, 255, 255)","	rgb(250, 240, 230)","	rgb(192, 192, 192)","rgb(128, 128, 128)","rgb(0, 0, 0)",
"rgb(112, 128, 144)","rgb(105, 105, 105)","rgb(128, 0, 0)","rgb(165, 42, 42)","	rgb(160, 82, 45)",
"rgb(210, 105, 30)","rgb(205, 133, 63)","rgb(25, 25, 112)","	rgb(0, 0, 128)","	rgb(0, 0, 255)","rgb(30, 144, 255)",
"rgb(135, 206, 235)","rgb(70, 130, 180)","rgb(64, 224, 208)","	rgb(0, 255, 255)","	rgb(0, 255, 255)",
"rgb(0, 139, 139)","rgb(0, 128, 128)","rgb(46, 139, 87)","rgb(75, 0, 130)","	rgb(128, 0, 128)","rgb(255, 0, 255)"];

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
  