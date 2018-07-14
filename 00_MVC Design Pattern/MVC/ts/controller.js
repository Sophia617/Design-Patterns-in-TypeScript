var StudentController = /** @class */ (function () {
    //constructor
    function StudentController(model, view) {
        this._model = model;
        this._view = view;
    }
    // Getter and Setter - Student Data
    StudentController.prototype.setStudentName = function (name) {
        this._model.setName(name);
    };
    StudentController.prototype.getStudentName = function () {
        var studentName = this._model.getName();
        console.log('test');
        return studentName;
    };
    StudentController.prototype.setStudentRollNo = function (rollNo) {
        this._model.setName(rollNo);
    };
    StudentController.prototype.getStudentRollNo = function () {
        var studentRollNo = this._model.getRollNo();
        return studentRollNo;
    };
    // View
    StudentController.prototype.updateView = function () {
        this._view.printStudentDetails(this._model.getName(), this._model.getRollNo());
    };
    return StudentController;
}());
//# sourceMappingURL=controller.js.map