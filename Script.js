

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clear(){
    display.value = "";
}

function Cal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}