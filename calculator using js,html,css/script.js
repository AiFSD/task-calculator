 var display=document.getElementById("display");
 function appendToDisplay(input){
  display.value += input;
}


function clearDisplay(){
    display.value="";
}

function calculate(){
    display.value=eval(display.value);
}
function eraseOne() {
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
  }