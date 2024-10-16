
//  random color names script
const colors = ["White","Gold","Aqua","Brown","Silver","Green","Yellow","Red","Khaki","Orange",
"Blue","Black","Gray","Pink","GreenYellow","Lime","Chartreuse","DarkGreen","Olive","Teal",
"Crimson","DarkRed","DeepPink","	PaleVioletRed","Coral","Tomato","OrangeRed","LemonChiffon","Moccasin",
"Chartreuse","SpringGreen","	OliveDrab","	DarkCyan","	Turquoise","Aquamarine","Gainsboro"];

const btn1 = document.getElementById("btn1");
const color1 = document.querySelector(".color1");

btn1.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color1.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};



//hex color script

document.addEventListener("DOMContentLoaded", function() {
  const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
  const btn = document.getElementById("btn2");
  const color2 = document.querySelector(".color2");

  btn.addEventListener("click", gen);

  function gen() {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
          hexColor += hex[getRandom()];
      }
      document.body.style.backgroundColor = hexColor;
      color2.textContent = hexColor;
  }

  function getRandom() {
      return Math.floor(Math.random() * hex.length);
  }
});


  //rgb color scricpt
  const colors2 = ["rgb(205, 92, 92)","rgb(220, 20, 60)","rgb(255, 0, 0)","rgb(139, 0, 0)","rgb(255, 192, 203)",
    "rgb(255, 20, 147)","rgb(219, 112, 147)","rgb(255, 160, 122)","	rgb(255, 127, 80)","rgb(255, 99, 71)",
    "	rgb(255, 165, 0)","	rgb(255, 215, 0)","rgb(255, 255, 255)","rgb(255, 250, 250)","rgb(240, 255, 240)",
    "rgb(240, 255, 255)","	rgb(250, 240, 230)","	rgb(192, 192, 192)","rgb(128, 128, 128)","rgb(0, 0, 0)",
    "rgb(112, 128, 144)","rgb(105, 105, 105)","rgb(128, 0, 0)","rgb(165, 42, 42)","	rgb(160, 82, 45)",
    "rgb(210, 105, 30)","rgb(205, 133, 63)","rgb(25, 25, 112)","	rgb(0, 0, 128)","	rgb(0, 0, 255)","rgb(30, 144, 255)",
    "rgb(135, 206, 235)","rgb(70, 130, 180)","rgb(64, 224, 208)","	rgb(0, 255, 255)","	rgb(0, 255, 255)",
    "rgb(0, 139, 139)","rgb(0, 128, 128)","rgb(46, 139, 87)","rgb(75, 0, 130)","	rgb(128, 0, 128)","rgb(255, 0, 255)"];
    
    const btn3 = document.getElementById("btn3");
    const color3 = document.querySelector(".color3");
    
    btn3.addEventListener("click",  () => {
      const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors2[randomNumber];
      color3.textContent = colors2[randomNumber];
    });
    
    function getRandomNumber() {
      return Math.floor(Math.random() * colors2.length);
    };

    //mobile menu
    function openNav(){
      document.getElementById("mySidenav").style.width="100%";
    }
    
    function closeNav(){
      document.getElementById("mySidenav").style.width="0";
    }