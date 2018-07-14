// Display View 1
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current Condition: " + this.temperature + " F degree, " + this.humidity + "% humidity");
    };
    return CurrentConditionsDisplay;
}());
// Display View 2
var StatisticsDisplay = /** @class */ (function () {
    function StatisticsDisplay(weatherData) {
    }
    StatisticsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    StatisticsDisplay.prototype.display = function () {
        console.log("Statistics Display: " + this.temperature + " F degree, " + this.humidity + "% humidity");
    };
    return StatisticsDisplay;
}());
// Display View 3
var ForecastDisplay = /** @class */ (function () {
    function ForecastDisplay(weatherData) {
    }
    ForecastDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    ForecastDisplay.prototype.display = function () {
        console.log("Forecast Display: " + this.temperature + " F degree, " + this.humidity + "% humidity");
    };
    return ForecastDisplay;
}());
