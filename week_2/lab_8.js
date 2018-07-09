const brainStationStudent = {
    name : "William",
    program : "WDFT",
    grade : "A"
}

function Student(name, program, grade){
    this.name = name;
    this.program = program;
    this.grade = grade;
}



students = [];

students.push(new Student("Drew", "WDFT", "A+"));
students.push(new Student("Victor", "WDFT", "A++"));
students.push(new Student("Chantal", "WDFT", "A+++"));

for (let i = 0 ; i < students.length ; i++){
    console.log(students[i].name);
}

const student = {
    fullName : {
      firstName : "Tim",
      lastName : "Johnstone"
    },
    grade: 12,
    birthDate: new Date("October 13, 2000"),
    courses : [
      {
        subject : "English",
        teacher : "Mr Smith",
        grade: 70
      },
      {
        subject : "Math",
        teacher : "Ms Jones",
        grade: 65
      },
      {
        subject : "Science",
        teacher : "Mr Gutenberg",
        grade: 67.5
      },
      {
        subject : "Gym",
        teacher : "Mr Sweeney",
        grade: 90
      },
      {
        subject : "History",
        teacher : "Ms Walters",
        grade: 82.5
      }
    ]
}

console.log(`First Name : ${student.fullName.firstName}, Last Name : ${student.fullName.lastName}`);
console.log(`Birth date : ${student.birthDate.getMonth()}/${student.birthDate.getDate()}/${student.birthDate.getFullYear()}`);
for (let i  = 0; i < student.courses.length ; i++){
    console.log(student.courses[i].subject);
}
let num = 0;
for (let i  = 0; i < student.courses.length ; i++){
    num += student.courses[i].grade;
}
