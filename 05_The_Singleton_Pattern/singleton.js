var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (this.uniqueInstance == null) {
            this.uniqueInstance = new Singleton();
        }
        return this.uniqueInstance;
    };
    return Singleton;
}());
