// We extend the Beverage class, since this is a beverage.
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
// Espresso
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = "Espresso";
        return _this;
        //Description instance variable is inherited from Beverage
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
// House Blend
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = "House Blend Coffee";
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    return HouseBlend;
}(Beverage));
// Dark Roast
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.description = "Dark Roast";
        return _this;
    }
    DarkRoast.prototype.cost = function () {
        return 0.99;
    };
    return DarkRoast;
}(Beverage));
// Decaf
var Decaf = /** @class */ (function (_super) {
    __extends(Decaf, _super);
    function Decaf() {
        var _this = _super.call(this) || this;
        _this.description = "Decaf";
        return _this;
    }
    Decaf.prototype.cost = function () {
        return 1.05;
    };
    return Decaf;
}(Beverage));
//# sourceMappingURL=concreteBeverage.js.map