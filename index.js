let input = document.getElementById("inputext");

//function to display the input on each keypad
function Calculate(number) {
    input.value = input.value+number;
}

//function to give the result/output of the calculation by clicking the equal key
function Result(){
    try {
        input.value = eval(input.value);
    } catch (error) {
        document.getElementById("inputext").value = "math error!";
    }
}

//function to clear everything on the input bar
function ClearAll() {
    input.value = "";
}

//function to delete inputs on the input bar from the last to the first
function Delete() {
    input.value = input.value.slice(0, -1);
}

function Sqr() {
    input.value = input.value+Math.sqrt(number);
}