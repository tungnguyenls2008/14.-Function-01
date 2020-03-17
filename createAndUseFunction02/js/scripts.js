// Side variables that help clean the codes
let circleInput = 'circleRadius';
let inputTxt = 'numInput';
let calSquareTxt = 'Its square is: ';
const PI = 3.1415;
let numInput = document.getElementById('numInput');

// Side functions that help clean the codes
function specialText(txt) {
    /*return "<strong>"+txt+"</strong>";*/
    return `<strong>${txt}</strong>`;
}

function getValue(id) {
    return +document.getElementById(id).value;
}

function specialUnit(unit, value) {
    return (unit + '&sup' + value + ';');
}

function displayResult() {
    let valueInput = document.getElementById('numInput').value;
    if (checkNumber(valueInput)) {
        display(4).innerHTML = "This is a number!";
    } else display(4).innerHTML = "This is NOT a number!";
}

function calSquare(a) {
    let result = a * a;
    display(1).innerHTML = calSquareTxt + specialText(result);
}

function display(index) {
    return document.getElementById('display' + index);
}

//main functions
function calCircleSurfaceAndDiameter(r) {
    let result1 = r * r * PI;
    let result2 = 2 * r * PI;
    let txt = "This circle's Surface is " + specialText(result1) + specialUnit('cm', 2);
    txt += " and its diameter is " + specialText(result2) + "cm";
    display(2).innerHTML = txt;
}

function calFactorial(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s *= i;
    }
    display(3).innerHTML = "Its Factorial is " + specialText(s);
}

function checkNumber(a) {
    return !isNaN(a);
}

function check3Numbers(a, b, c) {
    let min;
    if (b < a) {
        min = b;
        if (c < b) {
            min = c;
        }
    } else if (c < a) {
        min = c;
    } else min = a;
    console.log(min);
    display(5).innerHTML = "The smallest number among them is: " + specialText(min);
}

function checkIfBiggerThanZero(a) {
    if (a > 0 && a % 1 === 0)
        display(6).innerHTML = "This number is an Integer bigger than Zero!";
    else display(6).innerHTML = "This number is NOT an Integer bigger than zero!";
}

function swap2Numbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    display(7).innerHTML = "Here are they, all swapped good: " + specialText(a) + " and " + specialText(b);
}

function reverseArrayIndex(strInput) {
    let array;
    console.log(strInput);
    array = strInput.split(" ");
    console.log(array);
    array.reverse();
    display(8).innerHTML = array.toString();
}

function generateRandomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    display(9).innerHTML = text;
}

function findCharInArray(str, char) {
    let arr;
    arr = str.split("");
    let count = 0;
    let index = arr.indexOf(char);
    if (index === -1)
        return -1;
    else for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
        display(10).innerHTML = "The character " + specialText(char) + " appeared " + specialText(count) + " times inside the randomly generated array."

    }
    /*let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }display(10).innerHTML = "The character " + specialText(char) + " appeared " + specialText(count) + " times inside the randomly generated array."

    }*/

}