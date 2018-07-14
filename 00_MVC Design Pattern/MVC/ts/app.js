document.addEventListener("DOMContentLoaded", function (event) {
    //Student record
    var model = generateStudentOjb();
    //Create a view : to write student details on console
    var view = new StudentView();
    // Controller Object
    var controller = new StudentController(model, view);
    //get Student Data
    controller.updateView();
    controller.setStudentName('Tomas');
    controller.updateView();
    //Generate the Data
    function generateStudentOjb() {
        var studentObj = new Student();
        studentObj.setName('Sophia');
        studentObj.setRollNo('12345');
        return studentObj;
    }
});
//# sourceMappingURL=app.js.map