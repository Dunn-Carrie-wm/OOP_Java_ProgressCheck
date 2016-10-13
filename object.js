/**
 * Created by Session3 on 10/12/16.
 */
//This is literal OOP with java script.
var apple ={
    color: "Red",
    texture: "Soft",
    parishable: 10,
    cost: 1.00,
    displayApple: function (){
        document.write("My appple is " + this.color +
            ". And has a texture of "+ this.texture +
            ". This item is parishable after " + this.parishable +
            " days. And it costs " + this.cost)
    }
};

function  feature () {
    apple.displayApple();

}

// This will become the prototype for all food
var Food = function (color, texture, taste, price) {
    this.color = color;
    this.texture = texture;
    this.taste = taste;
    this.price = price;
};

// Encapsulates a method to display any food
Food.prototype.displayFood = function (){
    document.write("<input type='text' size='100' value=\'" + " The foood color is "+this.color + " and has a texture of "
        + this.texture + " the taste of the food is " + this.taste + " and it costs $" + this.price.toFixed(2) + "\'><br /><br />");

    this.launchFood();
};

// Encapsulates a method to launch the food
Food.prototype.launchFood = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.color + "\'>"
        + "Text area" + "</textarea><br /><br />");

    document.getElementById(this.color).innerHTML = "Food " + this.color;
};

// Defines a constructor for a subclass of food
function Bananna (color, texture, taste, price, peelSpeed){
    // Calls the parent constructor
    // This set the inherited properties for the subclass
    Food.call(this, color, texture, taste, price);
    // Set the specific subclass properties
    this.peelSpeed = peelSpeed;
}


Bananna.prototype.constructor = Bananna;

Bananna.prototype.displayFood = function (){
    document.write("<input type='text' size='100' value=\'" + " The food color is " + this.color + " and has a texture of "
        + this.texture + " the taste of the food is " + this.taste + " and it costs $" + this.price.toFixed(2) + " and has a peel speed of "+ this.peelSpeed +"\'><br /><br />");

    this.launchFood();
};

Bananna.prototype.launchFood = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.color + "\'>"
        + "Text area" + "</textarea><br /><br />");

    var output = "";
    for (var taste = 1; taste <= 5; taste ++){
        output += "This food taste " + taste + " yummy\n";
    }
    output += "The food is gone :(";

    document.getElementById(this.color).innerHTML = output;
};

// Defines a constructor for a subclass of food
function Orange (color, texture, taste, price, peelSpeed){
    // Calls the parent constructor
    // This set the inherited properties for the subclass
    Food.call(this, color, texture, taste, price);
    // Set the specific subclass properties
    this.peelSpeed = peelSpeed;
}


Orange.prototype.constructor = Orange;

Orange.prototype.displayFood = function (){
    document.write("<input type='text' size='100' value=\'" + " The food color is " + this.color + " and has a texture of "
        + this.texture + " the taste of the food is " + this.taste + " and it costs $" + this.price.toFixed(2) + " and has a peel speed of "+ this.peelSpeed +"\'><br /><br />");

    this.launchFood();
};

Orange.prototype.launchFood = function () {
    document.write("<img src='http://pngimg.com/upload/orange_PNG786.png' style='height: 100px; width: 100px;'><br>");
};


// Defines a constructor for a subclass of food
function Cake (color, texture, taste, price, cutSpeed){
    // Calls the parent constructor
    // This set the inherited properties for the subclass
    Food.call(this, color, texture, taste, price);
    // Set the specific subclass properties
    this.cutSpeed = cutSpeed;
}


Cake.prototype.constructor = Cake;

Cake.prototype.displayFood = function (){
    document.write("<input type='text' size='100' value=\'" + " The food color is " + this.color + " and has a texture of "
        + this.texture + " the taste of the food is " + this.taste + " and it costs $" + this.price.toFixed(2) + " and has a cutting speed of "+ this.cutSpeed +"\'><br /><br />");

    this.launchFood();
};

Cake.prototype.launchFood = function () {
    document.write("<img src='https://www.coldstonecreamery.com/assets/img/products/signaturecakes/signature-cakes-cakebatterconfetti.jpg' style='height: 100px; width: 100px;'><br>");

};

// Defines a constructor for a subclass of food
function Cereal (color, texture, taste, price, boxSize){
    // Calls the parent constructor
    // This set the inherited properties for the subclass
    Food.call(this, color, texture, taste, price);
    // Set the specific subclass properties
    this.boxSize = boxSize;
}


Cereal.prototype.constructor = Cereal;

Cereal.prototype.displayFood = function (){
    document.write("<input type='text' size='100' value=\'" + " The food color is " + this.color + " and has a texture of "
        + this.texture + " the taste of the food is " + this.taste + " and it costs $" + this.price.toFixed(2) + " and has a box size of "+ this.boxSize +"\'><br /><br />");

    this.launchFood();
};

Cereal.prototype.launchFood = function () {
    document.write("<img src='http://dingo.care2.com/pictures/greenliving/1045/1044458.large.jpg' style='height: 100px; width: 100px;'><br>");

};


function main() {

    var foodArray = [];
    foodArray[0] = new Food ("Red", "soft", "Yummy", 10.00);
    foodArray[1] = new Bananna ("Yellow", "soft", "sweet", 1.00, 10);
    foodArray[2] = new Orange ("Orange", "hard", "tangy", .10, 2);
    foodArray[3] = new Cake ("colorful", "soft", "Sweet", 11.00, 12);
    foodArray[4] = new Cereal("Blue", "crunchy", "marshmallow", 5.00, 25);
    for ( var i = 0; i< foodArray.length; i++){
        foodArray[i].displayFood();
    }
}