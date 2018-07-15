
// Display View 1
class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    
    weatherData: WeatherData;
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
        this.weatherData = weatherData;
    }
    
    public update(): void{
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }
    
    public display(): void {
        console.log(`Current Condition: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}

// Display View 2
class StatisticsDisplay implements IObserver, IDisplayElement {
    
    weatherData: WeatherData;
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
      this.weatherData = weatherData;
    }
    
    public update(): void{
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }
    
    public display(): void {
        console.log(`Statistics Display: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}

// Display View 3
class ForecastDisplay implements IObserver, IDisplayElement {
    
    weatherData: WeatherData;
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
        this.weatherData = weatherData;
    }
    
    public update(): void{
        this.temperature = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }
    
    public display(): void {
        console.log(`Forecast Display: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}