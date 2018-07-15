document.addEventListener('DOMContentLoaded', function (event) {
    // Create Weather Data Object
    var weatherData = new WeatherData();
    // Instantiate the three Displays and in the construction we pass the weather data object
    // when there is new change concrete Observers (display obj) will be able to access to the weather Data
    var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    var statisticsDisplay = new StatisticsDisplay(weatherData);
    var forecastDisplay = new ForecastDisplay(weatherData);
    // Register Observer to Subject
    weatherData.registerObserver(currentConditionsDisplay);
    weatherData.registerObserver(statisticsDisplay);
    weatherData.registerObserver(forecastDisplay);
    // Simulate new weather measurements
    weatherData.setMeasuements(80, 65, 30.4);
    weatherData.setMeasuements(82, 70, 29.2);
    weatherData.setMeasuements(78, 90, 29.2);
});
