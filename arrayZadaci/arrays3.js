
var arr = [4, 2, 5, -1, 6];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        
    }
}
console.log(min);