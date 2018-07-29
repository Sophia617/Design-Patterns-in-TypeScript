document.addEventListener("DOMContentLoaded", function(event) {
   
    // We want to order pizza in New York Pizza Store
    let nyPzzaStore: PizzaStore = new NYStylePizzaStore();
    
    // Order Cheese Pizza
    let pizza: Pizza =nyPzzaStore.orderPizza("cheese");
    console.log(`Sophia ordered a ${pizza.getName()}. `);
    
});