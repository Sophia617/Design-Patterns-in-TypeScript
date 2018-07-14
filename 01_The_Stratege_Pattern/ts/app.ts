document.addEventListener('DOMContentLoaded', function(event){
    
    let firstMallardDuck: Duck = new MallardDuck();
    firstMallardDuck.display();
    firstMallardDuck.performFly();
    firstMallardDuck.performQuack();
    
    let firstRubberDuck: Duck = new RubberDuck();
    firstRubberDuck.display();
    firstRubberDuck.performFly();
    firstRubberDuck.performQuack();
    //set new fly behaviour to a rubber duck  --> so they can fly now!
    firstRubberDuck.setFlyBehaviour(new FlyRoecketPowered());
    firstRubberDuck.performFly();
    
});
