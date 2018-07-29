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
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
var NYStylePizzaStore = /** @class */ (function (_super) {
    __extends(NYStylePizzaStore, _super);
    function NYStylePizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStylePizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new NyStyleCheesePizza();
        }
        else if (type === 'veggie') {
            return new NyStyleVeggiePizza();
        }
        else if (type === 'clam') {
            return new NyStyleClamPizza();
        }
        else if (type === 'pepperoni') {
            return new NYStylePepperoniPizza();
        }
        return null;
    };
    return NYStylePizzaStore;
}(PizzaStore));
