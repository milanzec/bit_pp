/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40*/



function BMIindex(weight, height) {
    var ind = weight / (height * height);
    if (ind < 15) {
        ind = "starvation";
        console.log(ind);
    }
    if (ind < 17.5 && ind >= 15) {
        ind = "anorexic";
        console.log(ind);
    }
    if (ind < 18.5 && ind >= 17.5) {
        ind = "underweight";
        console.log(ind);
    }
    if (ind < 25 && ind >= 18.5) {
        ind = "ideal";
        console.log(ind);
    }
    if (ind < 30 && ind >= 25) {
        ind = "overweight";
        console.log(ind);
    }
    if (ind < 40 && ind >= 30) {
        ind = "obese";
        console.log(ind);
    }
    if (ind >= 40) {
        ind = "morbede";
        console.log(ind);
    }
}

BMIindex(75, 1.83)

