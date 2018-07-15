// Display View 1
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
    }
    CurrentConditionsDisplay.prototype.update = function () {
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
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
        this.weatherData = weatherData;
    }
    StatisticsDisplay.prototype.update = function () {
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
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
        this.weatherData = weatherData;
    }
    ForecastDisplay.prototype.update = function () {
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    };
    ForecastDisplay.prototype.display = function () {
        console.log("Forecast Display: " + this.temperature + " F degree, " + this.humidity + "% humidity");
    };
    return ForecastDisplay;
}());
