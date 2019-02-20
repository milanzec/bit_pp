
var a = [1, 2, 3, 4]
var b = [5, 6, 7, 8]
    ;

for (var i = 0; i < a.length; i++) {
    a[a.length] = b[i];

}
console.log(a);