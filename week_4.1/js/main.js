// const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];

// Const lapRounds to an object
const lapRounds = {
    round1: 55.99,
    round2: 63.00,
    round3: 63.01,
    round4: 54.01,
    round5: 62.79,
    round6: 52.88,
    round7: 53.10,
    round8: 54.12
};


const salaryPerHour = function() {
    return this.salary / this.hoursPerWeek;
}

// Defines all the teachers
const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
        salary: 2623,
        hoursPerWeek: 34,
        salaryPerHour: salaryPerHour
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
        salary: 2564,
        hoursPerWeek: 26,
        salaryPerHour: salaryPerHour
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
        salary: 3256,
        hoursPerWeek: 41,
        salaryPerHour: salaryPerHour
    }
];


// Loops trough teachers and makes a message
function teacherInfo() {
    teachers.forEach(function(elm) {
        console.log('I have a %s named %s and he likes to work on a %s computer', elm.profession, elm.name, elm.brand);
    });
}
























//
