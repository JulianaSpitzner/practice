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
var hamburger = new Product("Hamburger", 11);
var hotdog = new Product("Hot Dog", 7);
var products = [];
products.push(hamburger);
products.push(hotdog);
console.log(products.toString()); // person.name isn't accessible from outside the class since it's private
