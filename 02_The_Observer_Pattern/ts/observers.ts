interface IObserver {
    // These are the state values that Observers get from the subject when a weather measurement changes
    // IObserver Interfaces is implemented by all observers, so all they have to implement update methods.
    update(): void;
}