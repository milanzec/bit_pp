

var a = 23;

for (n = 2; n < a; n++) {
    if (a % n === 0) {
        var res = a + " nije prost broj";
        break;
    } else {
        res = a + " je prost broj";
    }
}

console.log(res);