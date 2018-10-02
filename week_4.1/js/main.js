// const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

// Const lapRounds to an object
const runner = {
    name: 'Hendrik',
    lapRounds: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12],
}


// Defines all the teachers
const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
        salary: 2623,
        hoursPerWeek: 34,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        }
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
        salary: 2764,
        hoursPerWeek: 26,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        }
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
        salary: 3256,
        hoursPerWeek: 41,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        }
    }
];


// Loops trough teachers and makes a message
function teacherInfo() {
    teachers.forEach(function(elm) {
        console.log('I have a %s named %s and he likes to work on a %s computer', elm.profession, elm.name, elm.brand);
    });
}
























//
