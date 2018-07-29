abstract class PizzaStore {
    
    public orderPizza (type: string): Pizza {
        let pizza: Pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        
        return pizza;
    }
    //our Factory method is now abstract in PizzaStore
    // A Factory method handles object creation and encapsulates it in a subclass.
    abstract createPizza (type: string);
}

class NYStylePizzaStore extends PizzaStore{
    createPizza(type: string): Pizza{
        if (type === 'cheese') {
            return new NyStyleCheesePizza();
        } else if (type === 'veggie') {
            return new NyStyleVeggiePizza();
        } else if ( type === 'clam') {
           return new NyStyleClamPizza();
        } else if ( type === 'pepperoni') {
            return new NYStylePepperoniPizza();
        }
        return null;
    }
}
