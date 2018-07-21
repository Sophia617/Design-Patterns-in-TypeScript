abstract class Beverage {
    protected description: string;
    
    public getDescription(): string{
        return this.description
    }
    public cost(): number {
        return 0;
    }
}

