console.log("Hello, world");

var myVariableName;
myVariableName = "Hello, WORLD!!!";
console.log(myVariableName);

var order;
order = "black coffee"; //place order
console.log("Your order of " + order + " is ready");


var promptQuestion= "What letter does your first name start with?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
if (response === "A") {
    alertMessage = "Nice, dude.";
    console.log("Mine too.");
} else if (response === "B") {
    alertMessage = "I mean...";
} else if (response === "M") {
    alertMessage = "Beauful :)";
} else if (response === "m") {
    alertMessage = "Beauful :)";
} else {
    alertMessage = "That's too bad...";
}
alert(alertMessage);

// here is a comment in javascript

//you can't print into the console without a console log, the console log outputs a method to the web console 

//variables are like containers

//return values are RETURNED to us

//prompt, console.log and alert message