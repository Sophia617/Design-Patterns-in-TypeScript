// We extend the Beverage class, since this is a beverage.

// Espresso
class Espresso extends Beverage {
    constructor(){
        super();
        this.description = "Espresso";
        //Description instance variable is inherited from Beverage
    }
    
    public cost(): number{
        return 1.99;
    }
}

// House Blend
class HouseBlend extends Beverage {
    constructor(){
        super();
        this.description = "House Blend Coffee";
    }
    
    public cost(): number {
        return 0.89;
    }
}

// Dark Roast
class DarkRoast extends Beverage {
    constructor(){
        super();
        this.description = "Dark Roast";
    }
    
    public cost(): number {
        return 0.99;
    }
}

// Decaf
class Decaf extends Beverage {
    constructor(){
        super();
        this.description = "Decaf";
    }
    
    public cost(): number {
        return 1.05;
    }
}

