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
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.swim = function () { console.log('Im swimming. swim swim swim...'); };
    Duck.prototype.display = function () { };
    // Rather than handling the quack behaviour itself,
    // the Duck Object DELEGATES that behaviour to the object referenced by quackBehaviour
    Duck.prototype.performQuack = function () {
        this.quackBehaviour.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehaviour.fly();
    };
    // We can call these set methods anytime we want to change the behaviour of a duck on the fly or quack
    Duck.prototype.setFlyBehaviour = function (fb) {
        this.flyBehaviour = fb;
    };
    Duck.prototype.setQuackBehaviour = function (qb) {
        this.quackBehaviour = qb;
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        //MallardDuck inherits the quackBehaviour and flyBehaviour instance variable from the class Duck
        //A mallard duck uses the FlywithWings class to handle its fly, so when performFly() called,
        //the responsibility for the fly is delegated to the FlywitnWings object.
        _this.flyBehaviour = new FlyWithWings();
        _this.quackBehaviour = new Quack();
        return _this;
    }
    // override display() method
    MallardDuck.prototype.display = function () { console.log('I am a Mallard Duck'); };
    return MallardDuck;
}(Duck));
var ReadheadDuck = /** @class */ (function (_super) {
    __extends(ReadheadDuck, _super);
    function ReadheadDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehaviour = new FlyWithWings();
        _this.quackBehaviour = new Squeak();
        return _this;
    }
    ReadheadDuck.prototype.display = function () { console.log('I am a Readhead Duck'); };
    return ReadheadDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehaviour = new FlyNoWay();
        _this.quackBehaviour = new MuteQuack();
        return _this;
    }
    RubberDuck.prototype.display = function () { console.log('I am a Rubber Duck'); };
    return RubberDuck;
}(Duck));
var DecoyDuck = /** @class */ (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehaviour = new FlyNoWay();
        _this.quackBehaviour = new Quack();
        return _this;
    }
    DecoyDuck.prototype.display = function () { console.log('I am a Decoy Duck'); };
    return DecoyDuck;
}(Duck));
