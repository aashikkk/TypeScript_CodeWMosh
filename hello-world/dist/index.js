"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking test...");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printNames([
    new Student(1, "John", "Doe"),
    new Teacher("Mosh", "Hamedani"),
    new Principal("Adam", "Smith")
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map