document.addEventListener("DOMContentLoaded", function(event) {
    
    //Student record
    let model: Student = generateStudentOjb();
    //Create a view : to write student details on console
    let view: StudentView = new StudentView();
    // Controller Object
    let controller = new StudentController(model, view);
    
    //get Student Data
    controller.updateView();
    controller.setStudentName('Tomas');
    controller.updateView();

    
    //Generate the Data
    function generateStudentOjb(): Student {
        let studentObj =  new Student();
        studentObj.setName('Sophia');
        studentObj.setRollNo('12345');
        return studentObj;
    }
});
