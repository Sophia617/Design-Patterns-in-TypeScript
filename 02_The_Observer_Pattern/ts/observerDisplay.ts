
// Display View 1
class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
    
    }
    
    public update(temp: number, humidity: number, pressure: number): void{
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
    
    public display(): void {
        console.log(`Current Condition: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}

// Display View 2
class StatisticsDisplay implements IObserver, IDisplayElement {
    
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
    
    }
    
    public update(temp: number, humidity: number, pressure: number): void{
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
    
    public display(): void {
        console.log(`Statistics Display: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}

// Display View 3
class ForecastDisplay implements IObserver, IDisplayElement {
    
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(weatherData: WeatherData){
    
    }
    
    public update(temp: number, humidity: number, pressure: number): void{
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
    
    public display(): void {
        console.log(`Forecast Display: ${this.temperature} F degree, ${this.humidity}% humidity`);
    }
}