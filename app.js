function automaticEngine(){
    console.log('"I think I can... I think I can..."');
}
automaticEngine();

// Intended to gather the first letter of user's name
var response;
var promptQuestion = "What letter does your first name start with?"; 
function learnLetter(){
    response = prompt(promptQuestion);
    response = response.toLowerCase();
    if(response === "a") alert("Nice, dude.");
    else if(response === "b") alert("I mean...");
    else if(response === "m") alert("Beauful :)");
    else learnLetter();
    console.log(response);
}
learnLetter();

var order;
function orderUp(){
    order = "black coffee";
    console.log("Your order of " + order + " is ready");
}
orderUp();

for (var 1 = 0; i < 10; i++) {
    console.log(i);
}

// body of for loop

var pass; 
while(pass !== storedPassword){
    
]