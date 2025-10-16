interface Student {
    firstname: string;
    lastname: string;
    age: number;
}

const students: Student[] = [
    {firstname: "Damien", lastname: "Wallis", age: 18},
    {firstname: "Raphael", lastname: "Maringer", age: 17},
    {firstname: "Simon", lastname: "Metzler", age: 18},
    {firstname: "Halil", lastname: "Karpuz", age: 19},
];



let students_map = students.map(student => student.firstname);
console.log(students_map);

let students_filter = students.filter(student => student.age > 18);
console.log(students_filter);

let students_sort = students.sort((a, b) => a.age - b.age);
console.log(students_sort);
