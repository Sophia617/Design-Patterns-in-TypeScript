class StudentController {
    private _model: Student;
    private _view: StudentView;
    
    //constructor
    constructor ( model: Student,  view: StudentView){
    this._model = model;
    this._view = view;
    }

    // Getter and Setter - Student Data
    public setStudentName(name:string):void {
        this._model.setName(name);                
    }
    public getStudentName():string{
        let studentName = this._model.getName();
        console.log('test');
        return studentName;
    }
    
    public setStudentRollNo(rollNo:string): void {
        this._model.setName(rollNo);
    }
    public getStudentRollNo(): string {
        let studentRollNo = this._model.getRollNo();
        return studentRollNo;
    }
    
    // View
    public updateView(): void {
        this._view.printStudentDetails(this._model.getName(), this._model.getRollNo());
    }
}