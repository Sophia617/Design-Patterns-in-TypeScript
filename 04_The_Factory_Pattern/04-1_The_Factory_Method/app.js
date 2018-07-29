document.addEventListener("DOMContentLoaded", function (event) {
    // We want to order pizza in New York Pizza Store
    var nyPzzaStore = new NYStylePizzaStore();
    // Order Cheese Pizza
    var pizza = nyPzzaStore.orderPizza("cheese");
    console.log("Sophia ordered a " + pizza.getName() + ". ");
});
