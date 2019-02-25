
var arr = [];
var arr2 = [];
var sum1 = 0;
var sum2 = 0;
var res = 0;

for (var i = 0; i < 1001; i++) {
    if (arr[i] % 2 === 0) {
        sum1 = sum1 + arr[i];
    } for (var j = 0; j < 500; j++) {
        if (arr2[j] % 2 !== 0) {
            sum2 = sum2 - arr2[j];
        }
    }
    res = (sum1 + sum2) * 12.5;

}
console.log(res);