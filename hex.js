const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B",   
"C", "D", "E", "F"]  
const btn = document.getElementById("btn");  
const color = document.querySelector(".color")

btn.addEventListener("click", gen)

function gen(){  
    let hexColor = "#"  
    for (var i = 0; i<6; i++){  
        hexColor  += hex[getRandom()]  
   }  
  document.body.style.backgroundColor = hexColor;  
  color.textContent = hexColor; 


}  
function getRandom(){  
    return Math.floor(Math.random() * hex.length )  
}

function openNav(){
    document.getElementById("mySidenav").style.width="240px";
  }
  
  function closeNav(){
    document.getElementById("mySidenav").style.width="0";
  }