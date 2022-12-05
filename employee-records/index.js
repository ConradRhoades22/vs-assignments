let employees = [Employee]

function Employee(fName, lName, salary, status){
    this.fName = fName
    this.lName = lName
    this.salary = salary
    this.status = status ? status : 'Full Time'; // "Full Time"
    console.log(this.fName + " " + lName + " " +  salary + " " + status)
}

var bobbyBushae = new Employee("Bobby", "Bushea", 80000)
var timmyJones = new  Employee("Timmy", "Jones", 500000, "Contract")
var janeDowney = new Employee("Jane", "Downey", 80000, "Part Time")
