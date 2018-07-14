interface IFlyBehaviour {
   fly();
}

class FlyWithWings implements IFlyBehaviour {
    fly(){
        console.log('Im can fly with wings!');
    }
}

class FlyNoWay implements IFlyBehaviour {
    fly(){
      console.log('I cannot fly');
    }
}

class FlyRoecketPowered implements IFlyBehaviour {
    fly(){
        console.log('I am flying with a rocket!');
    }
}