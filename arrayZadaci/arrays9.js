
var e = 2;
arr = [4, 6, 2, 8, 2, 2];

for (var i = 0; i < arr.length; i++) {
    if (e === arr[i]) {
        delete arr[i];
    }
}
console.log(arr);