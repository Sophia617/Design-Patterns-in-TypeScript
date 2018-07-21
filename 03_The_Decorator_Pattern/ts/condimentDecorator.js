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
// We need to be interchangeable with a Beverage, so we extend the Beverage class
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
// Mocha is a decorator so we extends CondimentDecorator
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        // We want our description to not only include the beverage, but also to include the item decorating the beverage instance. So we first delegate to the object that we are decorating to get its description, and then append 'mocha' to that description
        return this._beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        // Compute the cost of our beverage with mocha.
        // First we delegate the call to the object we are decorating, so that it can compute the cost; then, we add the cost of Mocha to the result.
        return 0.20 + this._beverage.cost();
    };
    return Mocha;
}(CondimentDecorator));
// Whip is a decorator so we extends CondimentDecorator
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this._beverage.getDescription() + ", Whip";
    };
    Whip.prototype.cost = function () {
        return 0.10 + this._beverage.cost();
    };
    return Whip;
}(CondimentDecorator));
//Soy is a decorator so we extends CondimentDecorator
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this._beverage.getDescription() + ", Soy";
    };
    Soy.prototype.cost = function () {
        return 0.15 + this._beverage.cost();
    };
    return Soy;
}(CondimentDecorator));
//Steam Milk  0.10
var SteamMilk = /** @class */ (function (_super) {
    __extends(SteamMilk, _super);
    function SteamMilk(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    SteamMilk.prototype.getDescription = function () {
        return this._beverage.getDescription() + ", Steam Milk";
    };
    SteamMilk.prototype.cost = function () {
        return 0.10 + this._beverage.cost();
    };
    return SteamMilk;
}(CondimentDecorator));
//# sourceMappingURL=condimentDecorator.js.map