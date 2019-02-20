//task1
var Arr = ["1", "21", undefined, "42", "1e+3", Infinity];
function convNmbs(Arr) {
    var Arr2 = []
    for (var i = 0; i < Arr.length; i++) {
        if (typeof (Arr[i]) == "string") {
            Arr2[Arr2.length] = parseFloat(Arr[i]);

        }


    }
    return Arr2;
}


console.log(convNmbs(Arr)) +


//task 3

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function onlyTrue(Arr) {
    var Arr2 = [];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i]) {
            Arr2[Arr2.length] = Arr[i];
        }
    }
    return Arr2;
}
console.log(onlyTrue(arr));


//task 2
var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function allEllements(Arr) {
    var newOutput = "";
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] || Arr[i] == 0 || Arr[i] == false) {
            newOutput += Arr[i];
        }

    }
    return newOutput;

}

console.log(allEllements(arr));


//task 4

var Arr = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];


function numberLength(inputArr) {

    var result = 0;

    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === parseInt(inputArr[i])) {
            result++
        }
    }
    return result;
}
console.log(numberLength(Arr));