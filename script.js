function EquationSolver() {

document.body.innerHTML = ""; // Clears the HTML document from previous written elements

// Equation user input
var equation = prompt("Write the linear equation without any spaces. Unknown factor needs to be lowercase x"); //creates variable for equation and asks the user to write it
document.write("Input: " + equation + "<br>"); //Shows equation input


// Calculates equation length
var equationLength = equation.length; //creates variable for equation length and sets its value


// Finds the unknown factor(s) and adds number 1 before it if omitted
for (i = 0; i <= equationLength; i++) {
  if (equation.slice(i, i + 1) == "x") {
    var unknownPosition = i;
    if (i == 0 || equation.slice(i - 1, i) == "-" || equation.slice(i - 1, i) == "+" || equation.slice(i - 1, i) == "=") {
      var a = equation.slice(0, i); //Slices the string on the left of the unknown factor
      var b = equation.slice(i, equationLength); //Slices the string on the right of the unknown factor
      equation = a + "1" + b; //Redefines the equation adding 1 as the unknown factor coefficient
      i++; //Increments i value as a new character ("1") has been added before i position
      equationLength = equation.length; //Recaculates and resets equation length
    }
  }
}

// Adds + symbol at the beginning of the equation if there is no symbol yet
if ((equation.slice(0, 1) != "-") && (equation.slice(0, 1) != "+")) {
  equation = "+" + equation; //Redefines the equation adding "+" at the beginning
  equationLength = equation.length; //Recaculates and resets new equation length
}


// Finds the equals symbol
for (i = 0; i <= equationLength; i++) {
  if (equation.slice(i, i + 1) == "=") {
    var equalsPosition = i; //Creates variable for equals position and sets its value
  }
}


// Adds + symbol after the equals sign if there is no symbol yet
if (equation.slice(equalsPosition + 1, equalsPosition + 2) != "-" && equation.slice(equalsPosition + 1, equalsPosition + 2) != "+") {
  var a = equation.slice(0, equalsPosition + 1); //Slices the string on the left and including the equals sign
  var b = equation.slice(equalsPosition + 1, equationLength); //Slices the string on the right of the equals sign
  equation = a + "+" + b; //Redefines the equation adding "+" after the equals sign
  equationLength = equation.length; //Recaculates and resets equation length
}


var coefficientsValue = 0; //Creates variable that will contain the coefficients total value and sets its initial value to 0
var constantsValue = 0; //Creates variable that will contain the constants total value and sets its initial value to 0
var elementStart = 0; //Creates variable for element starting position and sets its value to 0


for (i = 1; i <= equalsPosition; i++) { //Reads the equation character by character from left to right until the equals sign and slices the different elements that it has
  if (equation.slice(i, i + 1) == "+" || equation.slice(i, i + 1) == "-" || i == equalsPosition) { //Checks if the character is "+" or "-", or the equals sign has been reached
    element = equation.slice(elementStart, i); //If yes, slices the element from elementStart to before i position
    if (element.slice(element.length - 1, element.lengh) == "x") { //Checks if the element is a coefficient
      element = element.slice(0, element.length - 1); //Removes the unknown factor at the end of the element to get the coefficient
      coefficientsValue = coefficientsValue + parseInt(element); //Adds the element value to the total coefficients value
    } else { //The element is a constant
      constantsValue = constantsValue - parseInt(element); //Decreases the element value to the total constants value
    }
    elementStart = i; //And sets new elementStart value for the next element
  }
}

var elementStart = equalsPosition + 1; //Sets new elementStart on next character after the equals sign

for (i = equalsPosition + 2; i <= equationLength; i++) { //Reads the equation character by character from the equals sign to the end of the equation and slices the different elements that it has
  if (equation.slice(i, i + 1) == "+" || equation.slice(i, i + 1) == "-" || i == equationLength) { //Checks if the character is "+" or "-", or the end of the equation has been reached
    element = equation.slice(elementStart, i); //If yes, slices the element from elementStart to before i position
    if (element.slice(element.length - 1, element.lengh) == "x") { //Checks if the element is a coefficient
      element = element.slice(0, element.length - 1); //Removes the unknown factor at the end of the element to get the coefficient
      coefficientsValue = coefficientsValue - parseInt(element); //Decreases the element value to the total coefficients value
    } else { //The element is a constant
      constantsValue = constantsValue + parseInt(element); //Adds the element value to the total constants value
    }
    elementStart = i; //And sets new elementStart value for the next element
  }
}


var unknownValue = constantsValue / coefficientsValue;  //Creates variable for unknown factor value and calculates its value
document.write("Output: x = " + unknownValue + "<br>"); //Shows equation solution
}
