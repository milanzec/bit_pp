"use strict";
(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;


    }
    Person.prototype.getData = function () {
        return "" + this.name + " " + this.surname;
    };

    function Seat(number, category) {
        this.number = number || Math.floor(Math.random() * 90) + 10;
        this.category = category || "e";


    }
    Seat.prototype.getData = function () {
        return this.number + ", " + this.category;
    }

    function Passanger(person, seat) {
        this.person = person;
        this.seat = seat;


    }
    Passanger.prototype.getData = function () {
        return this.seat.getData() + " " + this.person.getData();
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
        var flightdata = '';
        for (var i = 0; i < this.listofPassangers.length; i++) {
            flightdata += "\n\t" + this.listofPassangers[i].getData();
        }

        return this.date.toDateString() + ", " + this.relation + flightdata;
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
            Airport.prototype.addflight = function (flight) {
                this.listOfFlights.push(flight);
            };
            Airport.prototype.getData = function () {
                var z = 0;
                var k = "";
                for (var i = 0; i < this.listOfFlights.length; i++) {
    
    
                    z += this.listOfFlights[i].listofPassangers.length;
                    k += this.listOfFlights[i].getData() + "\n";
                    var bkz = " " + z + "\n\t" + k;
                }
                return this.name + bkz
    
            };

    var aca = new Person("Aca", "Lukas");
    var windowSeat1 = new Seat(87, "b");
    var mitar = new Person("Mitar", "Miric");
    var windowSeat2 = new Seat(26, "b");
    var jovan = new Person("Jovan", "Perisic");
    var windowSeat3 = new Seat(20, "b");
    var sejo = new Person("Sejo", "Kalac");
    var windowSeat4 = new Seat(90, "b");


    var pas1 = new Passanger(aca, windowSeat1);
    var pas2 = new Passanger(mitar, windowSeat2);
    var pas3 = new Passanger(jovan, windowSeat3);
    var pas4 = new Passanger(sejo, windowSeat4);

    var fl = new Flight("belgrade - paris", "3.11.2019");
    var fl2 = new Flight("Beograd - Frankfurt", "5.11.2019");
    fl.addPassanger(pas1);
    fl.addPassanger(pas3);
    fl2.addPassanger(pas2);
    fl2.addPassanger(pas4);


    var nikola = new Airport();
    nikola.addflight(fl);
    //console.log(nikola.getData());
    nikola.addflight(fl2);
    console.log(nikola.getData());

})();