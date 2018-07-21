abstract class Beverage {
    protected description: string;
    
    public getDescription(): string{
        return this.description
    }
    public abstract cost(): number;
}

