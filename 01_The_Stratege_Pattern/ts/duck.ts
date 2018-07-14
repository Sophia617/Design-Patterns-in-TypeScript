abstract class Duck {
    
    // Add two instance variables that are declared as the interface type (Not a concrete class implementation type)
    // Instance variable hold a reference to a specific behaviour at runtime
    // Each duck obj will set these variables polymorphically to reference the SPECIFIC behaviour type it would like at runtime (FlyWithWings, Squeak, etc...)
    
    // Each Duck has a reference to something that implements the FlyBehaviour Interface and QuackBehaviour Interface
    protected flyBehaviour: IFlyBehaviour;
    protected quackBehaviour: IQuakBehaviour;
    
    swim (){ console.log ('Im swimming. swim swim swim...'); }
    display(){}
    
    // Rather than handling the quack behaviour itself,
    // the Duck Object DELEGATES that behaviour to the object referenced by quackBehaviour
    performQuack(){
        this.quackBehaviour.quack();
    }
    performFly(){
        this.flyBehaviour.fly();
    }
    
    // We can call these set methods anytime we want to change the behaviour of a duck on the fly or quack
    setFlyBehaviour(fb: IFlyBehaviour){
        this.flyBehaviour = fb;
    }
    setQuackBehaviour(qb: IQuakBehaviour){
        this.quackBehaviour = qb;
    }
}

class MallardDuck extends Duck {
   
    constructor(){
        super();
        //MallardDuck inherits the quackBehaviour and flyBehaviour instance variable from the class Duck
        //A mallard duck uses the FlywithWings class to handle its fly, so when performFly() called,
        //the responsibility for the fly is delegated to the FlywitnWings object.
        this.flyBehaviour = new FlyWithWings();
        this.quackBehaviour = new Quack();
    }
    // override display() method
    display(){console.log('I am a Mallard Duck');}
}

class ReadheadDuck extends Duck {
    
    constructor(){
        super();
        this.flyBehaviour = new FlyWithWings();
        this.quackBehaviour = new Squeak();
    }
    display(){console.log('I am a Readhead Duck');}
}

class RubberDuck extends Duck {
    
    constructor(){
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new MuteQuack();
    }
    display(){console.log('I am a Rubber Duck');}
}

class DecoyDuck extends Duck {
    
    constructor(){
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Quack();
    }
    display(){console.log('I am a Decoy Duck');}
}

