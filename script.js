document.write("<p>Hello World</p>");
document.write("<br><hr>");


var num1 = 2;
var num2 = 7;
var result = num1 + num2;
document.write("The result of " + num1 + " and " + num2 + " is " + result);
document.write("<br><hr>");


var add = function(num1, num2)
{
  return num1 + num2;
}
var result = add(5,6);
document.write(`result is ${result}`);
document.write("<br><hr>");

document.write("<h2>Arrays</h2>");
var cars = ["BMW", "Porshe", "Tesla", "Lamborghini"];
cars.push("Audi");
document.write(`<h4>The list of cars</h4>`);
document.write(`<ol>`);
for(var i=0;i<cars.length;i++)
{
  document.write(`<li>${cars[i]}</li>`);
}
document.write(`</ol>`);
document.write("<br><hr>");

document.write("<h2>Objects</h2>");
var multiple_cars = {
  brand : "Lamborghini",
  model : "urus",
  year : 2004,
  cost : 20000,
  cost_breakdown : {
    cgst : 1000,
    sgst : 2000,
    igst : 3000,
    tax : 4000
  }
}
document.write(JSON.stringify(multiple_cars));

function Cars(car_brand, car_model, price)
{
  this.car_brand = car_brand;
  this.car_model = car_model;
  this.price = price;
  this.teslaAutoPilot = function()
  {
    document.write("This tesla model is an AutoPilot car");
  }
}
var car1 = new Cars("Tesla", "AutoPilot model", 72000);
var car2 = new Cars("Lamborghini", "Urus model", 27000);
document.write("<br>");
car1.teslaAutoPilot();
document.write(`<p>${car1.car_model}</p>`);
document.write(`<p>${car2.car_model}</p>`);

multiple_cars.fuel_type = "Electric";

document.write(`<p>${multiple_cars.fuel_type}</p>`);

document.write("<br><hr>");

function resetFields() 
{
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
}

function resetRadios() 
{
  document.getElementById("rd1").checked = false;
  document.getElementById("rd2").checked = false;
}

function resetinterest()
{
  document.getElementById("p").value = "";
  document.getElementById("r").value = "";
  document.getElementById("t").value = "";
}
function resetri()
{
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
}

// button function
function button(){
  document.getElementById("heading").innerHTML="and I have completed my B.Tech";
  // alert("The button has been clicked.");
}
document.write("<h2 id=heading>My name is Dukkipati Lokesh.</h2>");


// to text whether the username and password have matched or not
function fn1(){
  var str = document.getElementById("text1").value;
  // alert("Welcome! to the webpage Mr/Mrs " + str);

  var str1 = document.getElementById("text2").value;

  if (str == str1) 
  {
    // document.write("Your username and password have matched");

    alert("Your username and password have matched");
  } 
  else 
  {
    // document.write("Your credentials match have been failed");
    alert("Your credentials match have been failed");
  }
}


// to give an alert for the which the user opted for

function fn2()
{
  var rd1 = document.getElementById("rd1");
  var rd2 = document.getElementById("rd2");

  if (rd1.checked == true && rd2.checked == true) 
  {
    alert("You have opted both the options i.e; " + rd1.value + " and " + rd2.value +  " you can choose only one option");
  } 
  else if(rd1.checked == true)
  {
    alert("The option you have opted "+ rd1.value);
  }
  else
  {
    alert("You have opted " + rd2.value + " as your option");
  }
}


// simple interest function
function fn3()
{
  var p = document.getElementById("p").value;
  var r = document.getElementById("r").value;
  var t = document.getElementById("t").value;

  var si = p * t * r;
  var si2 = si / 100;
  alert(`The Simple interest on your principle amount which is ${p} for an period of ${t} years with an interest rate of ${r} is ${si2}`);
}


//to calculate the area of triangle
function fn4()
{
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;

  var area = 0.5 * base * height;
  alert(`The area of Triangle for the given base value of ${base}cm and the height value of ${height}cm is ${area} cm^2`);
}


//To take input fro  the select box
function fn5()
{
  var select = document.getElementById("selectbox");
  alert("The option that you have selected is: " + select.options[select.selectedIndex].value); 
}

//"getElementByTagName" (by using this we can change the styling)
function changeStyling()
{
  var para = document.getElementsByTagName("p");
  para[5].style.fontSize = "34px";
  para[6].style.color = "orange";
  para[7].style.fontWeight = "lighter";
  para[8].style.fontStyle = "Italic";
}
// we can do the above thing in a function also, but it works when we want to apply the same to everything
// function changeStyling()
// {
//   var para = document.getElementsByTagName("p");
//   for(var i=0;i<para.length;i++)
//   {
//     para[i].style.color = "orange";
//   }
// }



//to style the necessary tags using JS 
function fn6() 
{
  var elements = document.getElementsByClassName("clsname");
  for (var i = 0; i < elements.length; i++) 
  {
    elements[i].style.color = "orange";
  }
}


//two functions of onmouseover and onmouseout

function newimage()
{
  document.getElementById("img1").src = "images/microsoft.png"
}

function oldimage()
{
  document.getElementById("img1").src = "images/google.png"
}


//to validate form

function validate()
{
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");

  if(username.value.trim() == "" || password.value.trim() == "")
  {
    alert("You can't proceed with blank values");
    return false;
  }
  else
  {
    true;
  }
}
function ress()
{
  document.getElementById("uname").value = "";
  document.getElementById("pass").value = "";
}



//to validate form-2 like checking for length of password and swhowing error in text box.

  function validate1() {
    var username1 = document.getElementById("uname1");
    var password1 = document.getElementById("pass1");
    var valid = true;

    // Reset previous styles
    username1.style.border = "";
    password1.style.border = "";
    document.getElementById("ulabel").style.visibility = "hidden";
    document.getElementById("plabel").style.visibility = "hidden";

    if (username1.value.trim() === "") {
      username1.style.border = "2px solid red";
      document.getElementById("ulabel").style.visibility = "visible";
      valid = false;
    }

    if (password1.value.trim() === "" || password1.value.trim().length < 5) {
      password1.style.border = "2px solid red";
      document.getElementById("plabel").style.visibility = "visible";
      valid = false;
    }

    return valid;
  }

  function ress1() {
    document.getElementById("uname1").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("ulabel").style.visibility = "hidden";
    document.getElementById("plabel").style.visibility = "hidden";
    document.getElementById("uname1").style.border = "";
    document.getElementById("pass1").style.border = "";
  }



  //regular expressions

  function val() {
  var input = document.getElementById("uname3");  // input element
  var username3 = input.value;                    // value from input
  var regx = /E00/;
  
  if (regx.test(username3)) {
    input.style.border = "1px solid #ccc";  
    document.getElementById("ulabel3").style.visibility = "hidden";
    alert("Valid username");
  } 
  else 
  {
    input.style.border = "2px solid red";
    document.getElementById("ulabel3").style.visibility = "visible";
  }
}

//mobile number validation using RegEx

function val1()
{
  var text = document.getElementById("abc").value.trim();

  var regx = /^[6-9][0-9]{9}$/;
  // var regx = /^[5-9][a-z]{8}[0]/;

  if(regx.test(text))
  {
    document.getElementById("lab1").innerHTML="Valid";
    document.getElementById("lab1").style.visibility="visible";
    document.getElementById("lab1").style.color="green";
    // text.style.border = "4px solid green";
  }
  else
  {
    document.getElementById("lab1").innerHTML="Invalid Mobile Number";
    document.getElementById("lab1").style.visibility="visible";
    document.getElementById("lab1").style.color="red";
    // text.style.border = "4px solid red";
  }
}
function re()
{
  document.getElementById("abc").value = "";
}


//email id validation

function val2()
{
  var text1 = document.getElementById("email").value.trim();

  var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,20})(\.[a-z]{2,8})?$/; // + means we can have any number of characters

  // var regx = /^([a-z A-Z 0-9  \.-]{2-20})$/;
  if (regx.test(text1)) 
  {
    document.getElementById("lab2").innerHTML = "Valid Email-ID";
    document.getElementById("lab2").style.visibility = "visible";
    document.getElementById("lab2").style.color = "green";
  } 
  else 
  {
    document.getElementById("lab2").innerHTML = "Invalid Email-ID";
    document.getElementById("lab2").style.visibility = "visible";
    document.getElementById("lab2").style.color = "red";
  }
}


//to print output on the page itself

function txtadd()
{
  var z1 = document.getElementById("txt1").value;
  var z2 = document.getElementById("txt2").value;
  document.getElementById("op").innerHTML="Result = " + (z1 + " " + z2);
}



//timing function example [setTimeout() and clearTimeout() methods]
var id = 0;
function printMsg()
{
  document.getElementById("timing").innerHTML = "5 seconds have passed after you pressed start button."
}

function start()
{
  id = window.setTimeout(printMsg, 5000);
}

function stop()
{
  window.clearTimeout(id);
}


//timing function example [setInterval() and clearTimeout() methods]
var id1 = 0;
var seconds = 0;
function printMsg()
{
  document.getElementById("timing1").innerHTML = seconds + " seconds have passed after you pressed start button."
  seconds++;
}

function start1()
{
  id1 = window.setInterval(printMsg, 1000);
}

function stop1()
{
  window.clearInterval(id1);
}



//fade-in and fade-out animations

var opacity = 0;
var intervalId = 0;

function hide()
{
  var img = document.getElementById("fading");
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
  if(opacity>0)
  {
    opacity = opacity - 0.1;
    img.style.opacity = opacity;
    console.log(opacity);
  }
  else
  {
    clearInterval(intervalId);
  }
}
function show()
{
  var img = document.getElementById("fading");
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
  if(opacity<1)
  {
    opacity = opacity + 0.1;
    img.style.opacity = opacity;
    console.log(opacity);
  }
  else
  {
    clearInterval(intervalId);
  }
}

function fadeout()
{
  intervalId = setInterval(hide,700);
}
function fadein()
{
  intervalId = setInterval(show, 700);
}