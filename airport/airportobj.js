"use strict";
(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;


    }
    Person.prototype.getData = function () {
        return ` ${this.name}  ${this.surname}`;
    };

    function Seat(number = Math.floor(Math.random() * 90) + 10, category = "e") {
        this.number = number;
        this.category = category;


    }
    Seat.prototype.getData = function () {
        return `${this.number},${this.category}`;
    }

    function Passanger(person, seat) {
        this.person = person;
        this.seat = seat;


    }
    Passanger.prototype.getData = function () {
        return (`${this.seat.getData()} ${this.person.getData()}`);
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listofPassangers = [];


    }
    Flight.prototype.addPassanger = function (passanger) {
        this.listofPassangers[this.listofPassangers.length] = passanger;
    }
    Flight.prototype.getData = function () {
        let flightdata = '';
        for (let i = 0; i < this.listofPassangers.length; i++) {
            flightdata += "\n\t" + this.listofPassangers[i].getData();
        }

        return `${this.date.toDateString()},${this.relation} ${flightdata}`;
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
    Airport.prototype.addflight = function (flight) {
        this.listOfFlights.push(flight);
    };
    Airport.prototype.getData = function () {
        let z = 0;
        let k = "";
        for (let i = 0; i < this.listOfFlights.length; i++) {


            z += this.listOfFlights[i].listofPassangers.length;
            k += this.listOfFlights[i].getData() + "\n";
            var bkz = " " + z + "\n\t" + k; // popraviti
        }
        return `${this.name} :broj putnika u svim letovima ${bkz}`

    };

    const aca = new Person("Aca", "Lukas");
    const windowSeat1 = new Seat(87, "b");
    const mitar = new Person("Mitar", "Miric");
    const windowSeat2 = new Seat(26, "b");
    const jovan = new Person("Jovan", "Perisic");
    const windowSeat3 = new Seat(20, "b");
    const sejo = new Person("Sejo", "Kalac");
    const windowSeat4 = new Seat(90, "b")
    const pas1 = new Passanger(aca, windowSeat1);
    const pas2 = new Passanger(mitar, windowSeat2);
    const pas3 = new Passanger(jovan, windowSeat3);
    const pas4 = new Passanger(sejo, windowSeat4);

    const fl = new Flight("belgrade - paris", "3.11.2019");
    const fl2 = new Flight("Beograd - Frankfurt", "5.11.2019");
    fl.addPassanger(pas1);
    fl.addPassanger(pas3);
    fl2.addPassanger(pas2);
    fl2.addPassanger(pas4);


    const nikola = new Airport();
    nikola.addflight(fl);
    //console.log(nikola.getData());
    nikola.addflight(fl2);
    console.log(nikola.getData());

})();