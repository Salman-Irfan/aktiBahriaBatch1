console.log(`function inside object`)


let student = {
    firstName: "salman",
    lastName: "irfan",
    makeFullName: function () {
        return `${this.firstName} ${this.lastName}` // this refers to its object property itself
    },
}

console.log(student)
console.log(student.makeFullName())


