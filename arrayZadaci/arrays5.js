sum = 0;
arr = [3, 11, -5, -3, 2];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        sum += arr[i];
    }
}
console.log(sum); 