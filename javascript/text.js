function updateHeader() {
  var newName = prompt("What is your name"); //user enters name
  var oldHeader = document.getElementById("header"); //grabs old header
  oldHeader.innerHTML = "Welcome, " + newName + "~!"; //replaces old header with new name
  var bgcolor = prompt("What color would you like your background to be?"); //after user enters name, 2nd prompt pops up to ask what color to change bg
  document.getElementById("bodybg").style.backgroundColor = bgcolor; //changes bg to color user stated
}

//declare arrays to put user text
var cmake = [];
var cmodel = [];
var cyear = [];

//declare global variables for user text
var carsmakeInput;
var carsmodelInput;
var carsyearInput;

//displays user text
var messageBox;

//function to insert user text into variables
function insert (){
  carsmakeInput = document.getElementById("carsmake");
  carsmodelInput = document.getElementById("carsmodel");
  carsyearInput = document.getElementById("carsyear");

  //puts user inputs into an array
    cmake.push(carsmakeInput.value);
    cmodel.push(carsmodelInput.value);
    cyear.push(carsyearInput.value);

    //runs function
    clearAndShow();
}

//function to display user texts
function clearAndShow(){
  //clear fields
    carsmakeInput.value = "";
    carsmodelInput.value = "";
    carsyearInput.value = "";
    
//shows output
    messageBox = document.getElementById("display");
    messageBox.innerHTML = "";

    messageBox.innerHTML += "Year: " + cyear.join(", ") + "<br/>";
    messageBox.innerHTML += "Make: " + cmake.join(", ") + "<br/>";
    messageBox.innerHTML += "Model: " + cmodel.join(", ") + "<br/>";
}
