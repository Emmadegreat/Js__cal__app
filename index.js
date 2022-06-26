let result = document.getElementById("inputext");

//function to display the input on each keypad
function Calculate(number) {
    result.value = result.value+number;
}

//function to give the result/output of the calculation by clicking the equal key
function Result(){
    try {
        result.value = eval(result.value);
    } catch (error) {
        document.getElementById("inputext").value = "math error!";
    } 
}

//function to clear everything on the input bar
function ClearAll() {
    result.value = "";
}

//function to delete inputs on the input bar from the last to the first
function Delete() {
    result.value = result.value.slice(0, -1);
}
