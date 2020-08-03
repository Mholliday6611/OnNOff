var myButton = document.getElementById("btn")
var myBox = document.getElementById("Box")
function toggleButton(){

myButton.innerHTML=(myButton.innerHTML == "On") ? "Off" :"On";
myBox.style.backgroundcolor = (myButton.style.backgroundcolor=="green") ? "yellow" : "green"
}


function changeColor(){
  if(myButton.innerHTML == "On"){
    myBox.style.backgroundColor = (myBox.style.backgroundColor == "green") ? "red" : "green";
  }
}

myButton.addEventListener("dblclick", toggleButton)
myBox.addEventListener('mouseup', changeColor)
myBox.addEventListener('mouseout', changeColor)


