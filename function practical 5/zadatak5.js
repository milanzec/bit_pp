
/*task 5
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna*/


var str = "eye";
var arrStr = [];
var arrStr2 = [];

for (var i = 0; i < str.length ; i++) {
    arrStr[i] = str[i];
    /*arrStr2 = arrStr2 + arrStr[i];*/
    if (arrStr[i] === arrStr[arrStr.length - 1 - i]) {
        var res = "true"
    } else {
        res = "false"
    }
    console.log(res);
}
 /*out put t,f,t ne znam sta nije u redu sa uslovom*/
