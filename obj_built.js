/*5. Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ]


function splitString(str) {
    var arr = str.split(" ");
    console.log(arr)
}

splitString("John Snow");



2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    12345 -> 54321

function reverseNmb(nmb) {
    var nbmSTR = nmb.toString();
    var rvrs = "";
    for (i = nbmSTR.length - 1; i >= 0; i--) {

        rvrs += nbmSTR[i];
    }
    return parseInt(rvrs);
}

console.log(reverseNmb(12345))


8.Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"*/

/*function firstCap(str) {

    var res = str.charAt(0).toUpperCase() + str.slice(1);
    return res;
}

console.log(firstCap("js string exercises"));

/*3.Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”

function strAlpha(str) {
    var lowStr = str.toLowerCase();
    var str2arr = lowStr.split("");
    str2arr = str2arr.sort();
    var arr2str = str2arr.join("");
    return arr2str;
}

console.log(strAlpha("Webmaster"));*/

/*4.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
    
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir"*/

function alfWord(text) {
    var words = text.split(" ");
    var alpabetized = [];

    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i].charAt(0).toUpperCase();
        var slicedRestOfWord = words[i].slice(1, words[i].length);
        var sortedRestOfWord = slicedRestOfWord.split('').sort().join('');

        alpabetized.push(firstLetter + sortedRestOfWord);
    }

    return alpabetized.join(' ');
}

console.log(alfWord("Republic Of Serbia"));





