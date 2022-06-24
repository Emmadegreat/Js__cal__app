let result = document.getElementById("inputext");

const Calculate=(number)=> {
    result.value = result.value+number;
}

function Tell() {
    document.getElementById("p").value = 0;
}
/*function getHistory() {
    return document.getElementById("history__value").innerText;
}

function printHistory(num) {
    return document.getElementById("history__value").innerText = num;
}
function getOutPut() {
    document.getElementById("output__value").innerText;
}

function printOutPut(num) {
    
    if (num=="") {
        document.getElementById("output__value").innerText = num;
    } else {
        document.getElementById("output__value").innerText = getFormattedNumber(num);  
    }
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++) {
    operator[i].addEventListner('click', function () {
        if (this.id=="clear") {
            printHistory("");
            printOutPut("");
        } else {
            if (this.id=="backspace") {
                var output = reverseNumberFormat(getOutPut()).toString();
                if (output) {
                    output = output.substr(0, output.length - 1);
                    printOutPut(output);
                }
            } else {
                var output = getOutPut();
                var history = getHistory();
                if (output!=="") {
                    output = reverseNumberFormat(output);
                    history = history + output;
                    if (this.id=="=") {
                        var result = eval(history);
                        printOutPut(result);
                        printHistory("");
                    }
                }
            }
        }
        
    });
    
}

var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++) {
    number[i].addEventListner('click', function () {
        var output = reverseNumberFormat(getOutPut());
        if (output!= NaN) {
            output = output + this.id;
            printOutPut(output);
        }
        
    });
    
}

printOutPut();
document.getElementById("history__value").innerHTML;
document.getElementById("history__value").style.color = 'red';*/