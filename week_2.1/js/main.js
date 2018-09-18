const grade = 8;
const conditions = {
    purchasedBook: true,
    job: 'teacher',
    inTrain: false
}



// Opdracht 1
if (grade < 6) {
    console.log('Onvoldoende');
} else if (grade > 6 && grade <= 7) {
    console.log('Voldoende');
} else if (grade > 7 && grade <= 9) {
    console.log('Goed');
} else if (grade > 9) {
    console.log('Uitmuntend');
}


// Opdracht 2
switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
            console.log('Onvoldoende');
        break;
    case 7:
            console.log('Voldoende');
        break;
    case 8:
            console.log('Goed');
        break;
    case 9:
    case 10:
            console.log('Uitmuntend');
        break;
    default:
        console.log('You didn\'t even make the test');
}


// Opdracht 3
if (conditions.purchasedBook === true && conditions.inTrain === true && conditions.job === 'teacher') {
    console.log('Finally I can enjoy my book!');
} else if (conditions.purchasedBook === false && conditions.inTrain === true && conditions.job === 'teacher') {
    console.log('You are a ' + conditions.job + ' but you haven\'t purchased a book');
} else if (conditions.purchasedBook === true && conditions.inTrain === false && conditions.job === 'teacher') {
    console.log('You are a ' + conditions.job + ' but you\'re not in a train');
} else if (conditions.purchasedBook === false && conditions.inTrain === false && conditions.job === 'teacher') {
    console.log('You are just a ' + conditions.job);
} else if (conditions.purchasedBook === true && conditions.inTrain === true && conditions.job !== 'teacher') {
    console.log('You are a ' + conditions.job + ', so what are you doing in a train with a book?');
} else if (conditions.purchasedBook === false && conditions.inTrain === true && conditions.job !== 'teacher') {
    console.log('You are a ' + conditions.job + ', so I\'m guessing your on your way to work');
} else if (conditions.purchasedBook === true && conditions.inTrain === false && conditions.job !== 'teacher') {
    console.log('You are a ' + conditions.job + ', so I you are just relaxing with your book');
} else if (conditions.purchasedBook === false && conditions.inTrain === false && conditions.job !== 'teacher') {
    console.log('You are just a ' + conditions.job);
}
















//
