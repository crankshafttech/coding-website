console.log('javascript active');

document.getElementById("menuButton2").style.opacity = "1"
document.getElementById("menuButton").style.opacity = "1"


function openSidebar() {
  var screenWidth = "Total Width: " + screen.width;
  console.log(screenWidth);
  document.getElementById("mainMenu").style.right = "0"
  document.getElementById("menuButton").style.opacity = "0"
  document.getElementById("menuButton2").style.opacity = "0"
  if (screen.width <  500) {
  document.getElementById("body").style.overflow = "hidden"
  document.getElementById("mainMenu").style.left = "0"
}
else {
  document.getElementById("mainMenu").style.left = "calc(100% - 300px)"
}
  document.getElementById("body").style.filter = "grayscale(100%)";
}

function closeSideBar() {
document.getElementById("body").style.overflow = "visible"
document.getElementById("mainMenu").style.right = "-300px"
document.getElementById("mainMenu").style.left = "100%"
document.getElementById("body").style.filter = "grayscale(0)";
document.getElementById("menuButton").style.opacity = "1"
document.getElementById("menuButton2").style.opacity = "1"

}
