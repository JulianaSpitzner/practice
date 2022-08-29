var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.toString = function () {
        return "Product Name: ".concat(this.name, " Price: ").concat(this.price);
    };
    return Product;
}());
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink(name, price, containsAlcohol) {
        var _this = _super.call(this, name, price) || this;
        _this.containsAlcohol = containsAlcohol;
        return _this;
    }
    return Drink;
}(Product));
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(name, price, type, calories) {
        var _this = _super.call(this, name, price) || this;
        _this.type = type;
        _this.calories = calories;
        return _this;
    }
    return Food;
}(Product));
var hamburger = new Food("Classic Hamburger", 11, "Burgers", 900);
var gardenSalad = new Food("Garden Salad", 7, "Soups & Salads", 600);
var lemonade = new Drink("Lemonade", 7, false);
var beer = new Drink("Beer", 7, true);
var products = [];
products.push(hamburger);
products.push(gardenSalad);
products.push(lemonade);
products.push(beer);
console.log(products.toString()); // person.name isn't accessible from outside the class since it's private
