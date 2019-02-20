//task 1
var a = "";
var b = "";
function checkString(sampl) {
    var a = "true";
    var b = "false";
    if (typeof sampl == "string") {

        return a;
    } else {
        return b;
    }
}
console.log(checkString("12"))

//task 2

function chekEmptStr(test) {
    var tr = "true";
    var fl = "false";
    if ((typeof test == "string") && (!test)) {
        return tr;
    }
    else { return fl; }
}

console.log(chekEmptStr("2"));

//task3--zasto var res="" izvan bloka funkcije stampa Ha???

var res = "";
function addStr(wrd, n) {
    for (i = 0; i < n; i++) {
        res += wrd
    }
    return res;
}

console.log(addStr("Ha", 3));

//task 4

var a = "n";
function numOfAppearance(string, letter) {
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === a)
            sum++;
    }
    return sum;
}
console.log(numOfAppearance("My random string", "n"))

//task 5 ideja je da dobijemo [i] kao index i onda mu dodati 1 da bi imali tacan broj pozicije slova u reci(4),ali dobijamo [i]+1=41 a [i]-1=3,posle vracanja rezulatat trbealo bi break kako ne bi dobili broj pojavljivanja vec prvo pojavljivanje
var b = -1;
    var res = 0;
    
function frstApp(word, letter) {
    var k="k";
    
    var res = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == k) {
            res = [i]-1 ;
            //res+=1;
            return res;
        }
    }
}    

console.log(frstApp("barakurma", "k"));
