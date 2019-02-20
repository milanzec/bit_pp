// task 1
function maxNum(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
};
xNu
var maximum = maxNum(14, 55);
console.log(maximum);
// task 2
function oddNumber(number) {
    if (number % 2 === 0) {
        return true
    }
    return false

}


console.log(oddNumber(33));
// task 3
function numberLength(number) {

    if (typeof number === "number") {
        number += "";
        return number.length;
    } else {
        return "You must enter a number"
    }

}
console.log(numberLength("222"));

// task 4



function calculateNum(number) {
    var result = 0;
    for (var i = 0; i < number.length; i++) {
        result += number[i];

    }
    return result / number.length;
}
console.log(calculateNum([2, 3, 4, 5]))


// task 5












// task 7 

function nmbDigits(number) {
    var toString = "";
    var parsed = parseInt(number);
    if (typeof parsed === "number") {
        toString = toString + parsed
    }

    return toString.length;



}

console.log(nmbDigits(555.333));

// task 8

function numberLength(inputArr, num) {

    var result = 0;

    for (var i = 0; i < inputArr.length; i++) {

        if (num === inputArr[i]) {
            result++;
        }

    }

    return result
}

console.log(numberLength([7, 2, 4, 7, 8, 7, 7, 1], 4));

// task 9

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumOdd(inputArr) {
    var sum = 0;
    for (i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 !== 0) {
            sum += inputArr[i]
        }
    }
    return sum;
}


console.log(sumOdd(arr));

// task 10
var a = "a";
var b = "A";
function numOfAppearance(word, letter) {
    var sum = 0;

    for (var i = 0; i < word.length; i++) {

    }

}


numOfa = numOfAppearance("", 'a')
numOfA = numOfAppearance("", 'A')


