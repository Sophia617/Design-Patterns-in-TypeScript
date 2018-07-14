class Student {
    //field
    private _rollNo: string;
    private _name: string;
    
    public setName(name: string): void {
        this._name = name;
    }
    public getName(): string{
        return this._name;                        
    }
    
    
    public setRollNo(rollNo: string): void {
           this._rollNo= rollNo;
    }
    public getRollNo(): string {
        return this._rollNo;
    }
}