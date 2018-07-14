var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack! Quack!');
    };
    return Quack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log('Squeak! Squeak!');
    };
    return Squeak;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('I cannot Quack.. Im a Mute Duck');
    };
    return MuteQuack;
}());
