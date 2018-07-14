document.addEventListener('DOMContentLoaded', function(event){

    // Create Weather Data Object
    let weatherData: WeatherData = new WeatherData();
    
    // Create the three displays and pass them the weather data object
    let currentConditionsDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay (weatherData);
    let statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);
    let forecaseDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
    
    // Register Observer to Subject
    weatherData.registerObserver(currentConditionsDisplay);
    weatherData.registerObserver(statisticsDisplay);
    weatherData.registerObserver(forecaseDisplay);
    
    
    // Simulate new weather measurements
    weatherData.setMeasuements(80, 65, 30.4);
    weatherData.setMeasuements(82, 70, 29.2);
    weatherData.setMeasuements(78, 90, 29.2);
    
});