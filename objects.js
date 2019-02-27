/* 
1.   Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/

var coffe = {
    name: "esspreso",
    strength: "medium",
    flavour: "strong",
    milk: false,
    sugar: false,
};

/* 
2.   Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
*/

var favoriteMovie = {
    title: "Ko to tamo peva",
    actors: ["Dragan Nikolic", "Pavle Vujisic", "Neda Arnelic", "Slavko Stimac"],
    director: "Slobodan Sijan",
    genre: "Comedy",
    popularity: "Very high!"
};

/*
3.   Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
*/

function app(des, proglang, gitR, comp) {
    return program = {
        description: des,
        programingLanguage: proglang,
        gitRepository: gitR,
        complete: comp,
        printGit: function () {
            console.log(this.gitRepository);
        },
        isJava: function () {
            if (this.programingLanguage == "JavaScript" || this.programingLanguage == "javascript")
                return true;
            else
                return false;
        },
        isComplete: function () {
            if (this.complete)
                return true;
            else
                return false;
        }
    }
}

var obj = app("Opis", "Lua", "NoGit", true);
obj.printGit();
console.log("Is Java: " + obj.isJava());
console.log("Is complete: " + obj.isComplete());


/*
4.   Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.
*/

function recipeCulinary() {
    recipe = {
        name: "pasulj",
        cuisine: "serbian",
        complexity: "3",
        listOfIngredients: ["beans", "onion", "carrots", "ribs"],
        preparingTime: "3 hours",
        preparingInstruction: "all ingridients cook on medium heat for 3 hours",
        printIngridients: function () {
            console.log(this.listOfIngredients)
        },
        checkTime: function () {
            if (parseFloat(this.preparingTime) <= 15) {
                console.log("yes")
            } else {
                console.log("no")
            }
        },
                deleteIngridient: function (ingid) {
            return delete this.listOfIngredients.ingid

        }
    }
};

var obj=recipeCulinary("pasulj","serbian","3", ["beans", "onion", "carrots", "ribs"],"3 hours",);

obj.printIngridients();

