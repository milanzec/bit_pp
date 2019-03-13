"use strict"

"use strict"

function Product (ID, name, price, expDate){
    this.productID = ID;
    this.name = name;
    this.price = price;
    this.expirationDate = expDate;
    this.getInfo = function (){
        return this.name[0].toUpperCase()+this.name[name.length-1].toUpperCase()+this.productID+', '+this.name+', '+this.price;
    }
}

function ShoppingBag (){
    this.listOfProduct = [];
    this.addProduct = function(product){
        var date = new Date();
        if (product.expirationDate>date){
            this.listOfProduct.push(product);
            console.log(product.name+" is added to bag");
        }
        else{
            console.log("Date has expired");
        }
    }
    this.averagePrice = function(){
        var sum = 0;
        for(var i=0; i<this.listOfProduct.length; i++){
            sum += this.listOfProduct[i].price;
        }
        return (sum/this.listOfProduct.length).toFixed(3);
    }
    this.getMostExpensive = function(){
        var prices = [];
        var mostExpensive;
        for(var i=0; i<this.listOfProduct.length; i++){
            prices.push(this.listOfProduct[i].price);
        }
        mostExpensive = Math.max(...prices);
        for(var i=0; i<this.listOfProduct.length; i++){
            if (this.listOfProduct[i].price == mostExpensive){
                return "Most expensive product in bag is "+this.listOfProduct[i].name+", price: "+this.listOfProduct[i].price;
            }
        }
    }
    this.calculateTotalPrice = function(){
        var totalPrice = 0;
        for(var i=0; i<this.listOfProduct.length; i++){
            totalPrice += this.listOfProduct[i].price;
        }
        return totalPrice;
    }
}

function PaymentCard (activeBalance, active, date){
    this.activeBalance = activeBalance;
    this.active = active;
    this.validUntilDate = date;
}

function checkoutAndBuy (bag, card){
    if (card.activeBalance >= bag.calculateTotalPrice){
        console.log("Purchase is successful :D");
    }
    else{
        console.log("We are missing "+(bag.calculateTotalPrice-card.activeBalance)+" to complete the purchase");
    }
}


var date2 = new Date( "Dec 15, 2020" );
var product = new Product(12345, 'Banana', 30.55, date2);
var product1 = new Product(12335, 'Apple', 60.66, date2);
var product2 = new Product(11145, 'Apple', 60.66, date2);


var bag = new ShoppingBag();
bag.addProduct(product);
bag.addProduct(product1);
bag.addProduct(product2);
console.log(bag.averagePrice());
console.log(bag.getMostExpensive());
console.log(bag.calculateTotalPrice());

var date2 = new Date( "Dec 15, 2020" );
var card = new PaymentCard(500, true, date2);
console.log(card.activeBalance);

checkoutAndBuy(bag, card);