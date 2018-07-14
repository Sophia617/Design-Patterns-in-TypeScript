document.addEventListener('DOMContentLoaded', function (event) {
    // Create Weather Data Object
    var weatherData = new WeatherData();
    // Create the three displays and pass them the weather data object
    var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    var statisticsDisplay = new StatisticsDisplay(weatherData);
    var forecaseDisplay = new ForecastDisplay(weatherData);
    // Register Observer to Subject
    weatherData.registerObserver(currentConditionsDisplay);
    weatherData.registerObserver(statisticsDisplay);
    weatherData.registerObserver(forecaseDisplay);
    // Simulate new weather measurements
    weatherData.setMeasuements(80, 65, 30.4);
    weatherData.setMeasuements(82, 70, 29.2);
    weatherData.setMeasuements(78, 90, 29.2);
});
