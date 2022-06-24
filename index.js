let result = document.getElementById("inputext");

const Calculate=(number)=> {
    result.value = result.value+number;
}

const Result = () => {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("invalid operation");
    } 
}

function Clr() {
    result.value = "";
}
function Del() {
    result.value = result.value.slice(0, -1);
}
