// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//Funtions

function myFunction(p1, p2)
 {
  return p1 * p2;
}

 let result = myFunction(4, 3);


 //objects

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementsByClassName("demo")[0].innerHTML = result;
// Display some data from the object:
document.getElementsByClassName("demo")[0].innerHTML += "<br>The car type is " + car.type;
 //document.getElementsByClassName("demo")[0].innerHTML="The model of car "+ car.model; 

// Access the DOM element with the class "demo" and display the result
//document.getElementsByClassName("demo")[0].innerHTML = result;

// Display some data from the object
//document.getElementsByClassName("demo")[0].innerHTML += "<br>The car type is " + car.type;
document.getElementsByClassName("demo")[0].innerHTML += "<br>The model of car is " + car.model;

