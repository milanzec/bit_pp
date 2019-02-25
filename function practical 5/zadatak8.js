
var a = "Belgrade Institute of Technology";
var arr = [];
var arr2 = [];

for (var i = 0; i < a.length; i++) {
    arr[i] = a[a.length - 1 - i];
    {
        arr2 = arr2 + arr[i]
    }
}
console.log(arr2);


/* ne razumem zasto sam morao deklarisati arr2 */