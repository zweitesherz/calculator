let button = document.getElementById('one');
button.onclick = function () {
    var field = document.getElementById("field");
    field.value += 1;
};

let buttonTwo = document.getElementById('two');
buttonTwo.onclick = function () {
    var field = document.getElementById("field");
    field.value += 2
}

let buttonThree = document.getElementById('three');
buttonThree.onclick = function () {
    var field = document.getElementById("field");
    field.value += 3
}

let buttonFour = document.getElementById('four');
buttonFour.onclick = function () {
    var field = document.getElementById("field");
    field.value += 4
}

let buttonfive = document.getElementById('five');
buttonfive.onclick = function () {
    var field = document.getElementById("field");
    field.value += 5
}


let buttonSix = document.getElementById('six');
buttonSix.onclick = function () {
    var field = document.getElementById("field");
    field.value += 6
}

let buttonSeven = document.getElementById('seven');
buttonSeven.onclick = function () {
    var field = document.getElementById("field");
    field.value += 7
}


let buttonNine = document.getElementById('nine');
buttonNine.onclick = function () {
    var field = document.getElementById("field");
    field.value += 9
}

let buttonEight = document.getElementById('eight');
buttonEight.onclick = function () {
    var field = document.getElementById("field");
    field.value += 8
}

let buttonNull = document.getElementById('null');
buttonNull.onclick = function () {
    var field = document.getElementById("field");
    field.value += 0
}



//______________операции___________________-//



let buttonPlus = document.getElementById('plus');
buttonPlus.onclick = function () {
    var field = document.getElementById("field");
    field.value += '+'
}

let buttonMinus = document.getElementById('minus');
buttonMinus.onclick = function () {
    var field = document.getElementById("field");
    field.value += '-'
}

let buttonMultipl = document.getElementById('multi');
buttonMultipl.onclick = function () {
    var field = document.getElementById("field");
    field.value += '*'
}

let buttonDelen = document.getElementById('delenie');
buttonDelen.onclick = function () {
    var field = document.getElementById("field");
    field.value += '/'
}


let buttonEval = document.getElementById('ravno');
buttonEval.onclick = function () {
    var field = document.getElementById("field");
    field.value = eval(field.value.toString())
}

let buttonClean = document.getElementById('clean');
buttonClean.onclick = function () {
    var field = document.getElementById("field");
    field.value = '';
}



