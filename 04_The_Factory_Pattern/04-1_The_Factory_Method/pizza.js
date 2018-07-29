var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.toppings = [];
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (var i = 0; i < this.toppings.length; i++) {
            console.log(" " + this.toppings[i]);
        }
    };
    Pizza.prototype.bake = function () {
        console.log("Bake for 25 mins at 350");
    };
    Pizza.prototype.cut = function () {
        console.log("Cutting the pizza..");
    };
    Pizza.prototype.box = function () {
        console.log("Placed the pizza in the box..");
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
var NyStyleCheesePizza = /** @class */ (function (_super) {
    __extends(NyStyleCheesePizza, _super);
    function NyStyleCheesePizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'NY Style Cheese Pizza';
        _this.dough = 'Extra Thick Crust Dough';
        _this.sauce = 'Plum Tomato Sauce';
        _this.toppings = ['Mozzarella Cheese'];
        return _this;
    }
    return NyStyleCheesePizza;
}(Pizza));
var NyStyleVeggiePizza = /** @class */ (function (_super) {
    __extends(NyStyleVeggiePizza, _super);
    function NyStyleVeggiePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NyStyleVeggiePizza;
}(Pizza));
var NyStyleClamPizza = /** @class */ (function (_super) {
    __extends(NyStyleClamPizza, _super);
    function NyStyleClamPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NyStyleClamPizza;
}(Pizza));
var NYStylePepperoniPizza = /** @class */ (function (_super) {
    __extends(NYStylePepperoniPizza, _super);
    function NYStylePepperoniPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NYStylePepperoniPizza;
}(Pizza));
