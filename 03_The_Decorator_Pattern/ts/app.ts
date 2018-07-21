document.addEventListener("DOMContentLoaded", function(event) {
    
    //Order #1 - beverage (Espresso Coffee)
    let beverage:Beverage = new Espresso();
    printOut(beverage);
    // Espresso $1.99
    
    //Oder #2 - beverage (Dark Roast coffee with double Mocha and Whip on the top)
    let beverage2: Beverage = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    printOut(beverage2);
    // Dark Roast, Mocha, Mocha, Whip $1.49
 
    //Oder #3 - beverage (House Blend Coffee with Soy Milk, Mocha, and Whip)
    let beverage3: Beverage = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    printOut(beverage3);
    //Coffee, Soy, Mocha, Whip $1.34
    
    // Print Out Console Method 
    function printOut(beverage: Beverage): void {
        console.log (`${beverage.getDescription()} $${beverage.cost()}`)
    }
});