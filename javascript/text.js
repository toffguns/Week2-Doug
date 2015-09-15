function updateHeader() {
  var newName = prompt("What is your name");
  var oldHeader = document.getElementById("header");
  oldHeader.innerHTML = "Welcome, " + newName + "~!";
}
