abstract class Pizza {
   name: string;
   dough: string;
   sauce: string;
   toppings = [];
   
   public prepare(): void {
      console.log(`Preparing ${this.name}`);
      console.log(`Tossing dough...`);
      console.log(`Adding sauce...`);
      console.log(`Adding toppings: `);
       for (let i = 0; i < this.toppings.length ; i++) {
          console.log(` ${this.toppings[i]}`)
       }
   }
   
   public bake(): void {
      console.log(`Bake for 25 mins at 350`)
   }
   public cut(): void {
      console.log(`Cutting the pizza..`)
   }
   public box(): void{
      console.log(`Placed the pizza in the box..`)
   }
   
   public getName(): string{
      return this.name;
   }
}

class NyStyleCheesePizza extends Pizza {
   name = 'NY Style Cheese Pizza';
   dough = 'Extra Thick Crust Dough';
   sauce = 'Plum Tomato Sauce';
   toppings = ['Mozzarella Cheese'];
    
}

class NyStyleVeggiePizza extends Pizza {

}

class NyStyleClamPizza extends Pizza {

}

class NYStylePepperoniPizza extends Pizza {

}