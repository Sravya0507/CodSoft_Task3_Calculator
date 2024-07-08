const display = document.getElementById("inputBox");
function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value= "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function deleteVal(){
    let currentValue = display.value;
            if (currentValue.length > 1) {
                display.value = currentValue.slice(0, -1);
            } else {
                display.value = '';
            }
}
function percentCal(){
    let currentValue = display.value;
    display.value = currentValue / 100;
}