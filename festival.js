function Genre(name) {
    this.name = name;

    this.getDataGenre = function (name) {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();

    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getDataMovie = function () {
        return this.title + "," + " " + this.length + "min," + " " + this.genre.getDataGenre();
    }
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.noOfMoviesInProgram = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);

    }
}















console.log("Hi!\n");





var action = new Genre('action');
var drama = new Genre('drama');
var comedy = new Genre('comedy');

var redemption = new Movie('The Shawshank Redemption', drama, 130);

var internationalMovies = new Program('12.31.2019');
internationalMovies.addMovie(redemption);


console.log(IT.getDataMovie());
console.log(drama.getDataGenre());



