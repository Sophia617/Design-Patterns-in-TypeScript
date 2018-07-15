interface Subject {
    registerObserver(observer: IObserver):void;
    removeObserver(observer: IObserver): void;
    notifyObserver(): void;
}

class WeatherData implements Subject {
    
    //instance variable declaration
    observers: Array<IObserver>;  //add array to hold the Observers and we create it in the constructor
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor(){
        this.observers = new Array<IObserver>();
    }
    
    //When observer registers, we just add it to the end of the list
    public registerObserver(observer: IObserver): void{
        this.observers.push(observer);
    }
    
    //When an observer wants to unregister, we just take it off the list
    public removeObserver(observer: IObserver): void{
        let i = this.observers.indexOf(observer);
        if(i>=0) {
            this.observers.splice(i);
        }
    }
    
    // This is where we tell all the observers about the state.
    // Because they are all IObserver, we know they all implement update(), so we know how to notify them
    public notifyObserver(): void{
        for (let observer of this.observers){
           observer.update();
        }
    }
    
    // Get current data
    public getTemp(){
        return this.temperature;
    }
    public getHumidity(){
        return this.temperature;
    }
    public getPressure(){
        return this.temperature;
    }
    
    // Method to test our display elements
    public setMeasuements(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObserver();
    }
    
    //Other weather data method here.
    
}