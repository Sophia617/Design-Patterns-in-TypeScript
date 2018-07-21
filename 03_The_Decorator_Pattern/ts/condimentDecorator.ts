// We need to be interchangeable with a Beverage, so we extend the Beverage class
abstract class CondimentDecorator extends Beverage {
    public getDescription (): string {
        return '';
    }
}

// Mocha is a decorator so we extends CondimentDecorator
class Mocha extends CondimentDecorator {
    
    // Instantiate Mocha with a reference to a Beverage using
    // (1) an instance variable to hold the beverage we are wrapping
    // (2) we pass the beverage we're wrapping to the decorator's constructor
    private beverage: Beverage;
    
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }
    
    public getDescription(): string {
        // We want our description to not only include the beverage, but also to include the item decorating the beverage instance. So we first delegate to the object that we are decorating to get its description, and then append 'mocha' to that description
        return `${this.beverage.getDescription()}, Mocha`;
    }
    
    public cost(): number {
        // Compute the cost of our beverage with mocha.
        // First we delegate the call to the object we are decorating, so that it can compute the cost; then, we add the cost of Mocha to the result.
        return 0.20 + this.beverage.cost();
    }
}

// Whip is a decorator so we extends CondimentDecorator
class Whip extends CondimentDecorator{
    
    private beverage: Beverage;
    
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }
    
    public getDescription(){
        return `${this.beverage.getDescription()}, Whip`;
    }
    
    public cost(): number {
        return 0.10 + this.beverage.cost();
    }
}

//Soy is a decorator so we extends CondimentDecorator
class Soy extends CondimentDecorator {
    
    private beverage: Beverage;
    
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    
    public getDescription(): string{
        return `${this.beverage.getDescription()}, Soy`;
    }
    
    public cost(){
        return 0.15 + this.beverage.cost();
        
    }
}

//Steam Milk  0.10
class SteamMilk extends CondimentDecorator {
    
    private beverage: Beverage;
    
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }
    
    public getDescription():string {
        return `${this.beverage.getDescription()}, Steam Milk`;
    }
    
    public cost(): number {
        return 0.10 + this.beverage.cost();
    }
}