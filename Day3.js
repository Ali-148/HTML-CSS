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


// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementsByClassName("demo")[0].innerHTML = result;
// Display some data from the object:
document.getElementsByClassName("demo")[0].innerHTML += "<br>The car type is " + car.type;
document.getElementsByClassName("demo")[0].innerHTML += "<br>The model of car is " + car.model;

function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo").innerHTML = voteable + " to vote.";

}


//Reassignment gives the error
// const PI = 3.142;

// PI = 22/7; // Let's reassign the value of PI

// console.log(PI); // Output: TypeError: Assignment to constant variable.

//Control FLow
//if/else
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("if-else").innerHTML = greeting;

//switch
let day;
switch(new Date().getdate())
{
  case 0:
    day="Sunday";
    break;

    case 1:
      day="Monday";
      break;

    case 2:
      day="Tuesday";
      break;

    case 3:
      day="Wednesday";
      break;

    case 4:
      day="Thursday";
      break;

    case 5:
      day="Friday";
      break;

    case 6:
      day="Saturday";
      break;
      
}
document.getElementById("week").innerHTML = "Today is " + day;


let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}


//literals like expression that are used in ''
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
//classes

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}


//callback
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//await
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}


//await
let value = await promise;

myDisplay();

let name='Ali'
    console.log(name);