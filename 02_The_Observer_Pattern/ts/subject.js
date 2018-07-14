var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = new Array();
    }
    //When observer registers, we just add it to the end of the list
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    //When an observer wants to unregister, we just take it off the list
    WeatherData.prototype.removeObserver = function (observer) {
        var i = this.observers.indexOf(observer);
        if (i >= 0) {
            this.observers.splice(i);
        }
    };
    // This is where we tell all the observers about the state.
    // Because they are all IObserver, we know they all implement update(), so we know how to notify them
    WeatherData.prototype.notifyObserver = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    // Method to test our display elements
    WeatherData.prototype.setMeasuements = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObserver();
    };
    return WeatherData;
}());
