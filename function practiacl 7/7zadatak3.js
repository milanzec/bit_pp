
function calculateSupply(age, amount) {

    var maxAge = 99;
    var sumAll = (amount * 365) * (maxAge - age);
    console.log("You will need " + sumAll + " to last you until the ripe old age of " + maxAge
    );
}

calculateSupply(34, 20);
calculateSupply(25, 10);
calculateSupply(55, 39);
