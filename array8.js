var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var j = 0;

for (i = 0; i < a.length ; i++) {
    a[a.length + i] = b[i];
    
}
console.log(a);