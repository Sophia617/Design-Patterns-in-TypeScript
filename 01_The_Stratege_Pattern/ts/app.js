document.addEventListener('DOMContentLoaded', function (event) {
    var firstMallardDuck = new MallardDuck();
    firstMallardDuck.display();
    firstMallardDuck.performFly();
    firstMallardDuck.performQuack();
    var firstRubberDuck = new RubberDuck();
    firstRubberDuck.display();
    firstRubberDuck.performFly();
    firstRubberDuck.performQuack();
    //set new fly behaviour to a rubber duck  --> so they can fly now!
    firstRubberDuck.setFlyBehaviour(new FlyRoecketPowered());
    firstRubberDuck.performFly();
});
