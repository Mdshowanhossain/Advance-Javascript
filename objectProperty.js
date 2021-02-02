const students = [
    { id: 10, name: "Md Hossain"},
    { id: 20, name: "Md osman"},
    { id: 30, name: "Md goni"},
    { id: 40, name: "Md hero"}
];


const names = students.map(s => s.name);
console.log(names);

const bigger = students.filter(s=> s.id>10);
console.log(bigger);

const smaller = students.filter(s=> s.id < 30);
console.log(smaller);

const names = students.map(s => s.id);
console.log(names);

const names = students.filter(s=> s.id > 30);
console.log(names);

const bigger = students.filter(s=> s.id > 30);

const smaller  = students.filter(s=> s.id < 30);
console.log(smaller);

const smaller = students.filter(s=> s.id < 30);
console.log(smaller);

const BiggerOne = students.find(s=> s.id>30);
console.log(BiggerOne);