var a = "a";
var A = "A";
function numOfAppearance(word, letter) {
    var sum = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === a || word[i] === A)
            sum++;
    }
    return sum;
}


console.log(numOfAppearance("Agroekonomija", a))