interface IQuakBehaviour {
     quack();
}

class Quack implements IQuakBehaviour {
    quack(){
        console.log('Quack! Quack!')
    }
}

class Squeak implements IQuakBehaviour{
    quack(){
        console.log('Squeak! Squeak!')
    }
}

class MuteQuack implements IQuakBehaviour {
    quack(){
        console.log('I cannot Quack.. Im a Mute Duck')
    }
}


