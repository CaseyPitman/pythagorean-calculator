//Calculator to find the unknown side of a right traingle via the Pythagorean Theorem
//a^2 + b^2 = c^2

//Button to activate the calculator
var onClick = document.getElementById("onClick");
//Input not number
var numberAlert = "You must enter side lengths as numbers.";

//function that decides which math to do depending on user input
function calculate(){
  //gets input from the user
  var sideAInput = document.getElementById("side-a-input").value;
  var sideBInput = document.getElementById("side-b-input").value;
  var sideCInput = document.getElementById("side-c-input").value;
  
  // Checks to be sure user only entered two sides
  function tooManyInputs(){ 
    if (sideAInput.length > 0 && sideBInput.length > 0 && sideCInput.length > 0){
      alert("Enter two sides only.");
    }  
  }
  
  //Calls check for number of inputs
  tooManyInputs();

  var sideASq = 0;
  var sideBSq = 0;
  var sideCSq = 0;
  
  //Finds A if unknown
  if (sideAInput.length === 0){ 
    if ($.isNumeric(sideBInput)===false || $.isNumeric(sideCInput)===false){
      alert(numberAlert);
    }
    sideBSq = Math.pow(sideBInput, 2);
    sideCSq = Math.pow(sideCInput,2);
    sideASq = (sideCSq - sideBSq);
    sideAInput = Math.sqrt(sideASq);
    document.getElementById("side-a-input").value= sideAInput;
  }
  
  //Finds B if unknown
  else if (sideBInput.length === 0){
    if ($.isNumeric(sideAInput)===false || $.isNumeric(sideCInput)===false){
      alert(numberAlert);
    }
    sideASq = Math.pow(sideAInput,2);
    sideCSq = Math.pow(sideCInput,2);
    sideBSq = (sideCSq - sideASq);
    sideBInput = Math.sqrt(sideBSq);
    document.getElementById("side-b-input").value= sideBInput;
  }
  
  //Finds C if unknown
  else if (sideCInput.length === 0){
    if ($.isNumeric(sideAInput)===false || $.isNumeric(sideBInput)===false){
      alert(numberAlert); 
    }
    sideASq = Math.pow(sideAInput,2);
    sideBSq = Math.pow(sideBInput,2);
    sideCSq = (sideASq + sideBSq);
    sideCInput = Math.sqrt(sideCSq);
    document.getElementById("side-c-input").value = sideCInput;
  }
}//ends Calculate function 

//calls the function calculate when clicked
$("#onClick").on("click", calculate);

//resets the input fields
var startOver = document.getElementById("reset");

function clearInput(){
  $('#side-a-input').val('');
  $('#side-b-input').val('');
  $('#side-c-input').val('');
}

startOver.addEventListener("click", clearInput);

