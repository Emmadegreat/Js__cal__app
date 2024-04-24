let input = document.getElementById("inputext");
let p = document.getElementById("display");
let operators = document.querySelectorAll('.operator')
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let off = document.getElementById('off');

let year = document.getElementById("year");


//function to display input from buttons
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (e) => {
        e.target.value;
        input.value += e.target.value;
    })
}

//function to operate equal-to
equal.addEventListener('click', e => {
    try {
        p.innerHTML = eval(input.value);
    } catch (error) {
        p.innerHTML = 'math error !';
    }
})

//function to clear everything on the input bar
clear.addEventListener('click', e => {
  e.target.value;
    input.value = "";
    p.innerHTML = "";
})

//function to delete inputs on the input bar from the last to the first
backspace.addEventListener('click', e => {
  e.target.value;
  input.value = input.value.slice(0, -1);
})

//square-root function
function Sqr() {
    input.value = Math.sqrt(input.value, 2);
}

//tan function
function Tan() {
    input.value=Math.tan(input.value);
}

//sin function
function Sin() {
    input.value = Math.sin(input.value);
}

//cos function
function Cos() {
    input.value = Math.cos(input.value);
}

input.style.visibility = 'hidden';
function Off() {
    if (input.style.visibility === 'hidden') {
        input.style.visibility = 'visible';
    } else {
        input.style.visibility = 'hidden';
    }
}

year.innerHTML = new Date().getFullYear();
