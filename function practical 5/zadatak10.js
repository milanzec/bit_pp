/*Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/


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

/*tacno resenje*/