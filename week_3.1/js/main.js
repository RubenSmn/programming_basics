// Fibonacci, add the amount of numbers you want
function showFibonacci(amount) {
    let a = 1, b = 0, temp;
    let list = [b, a];
    let i = 2;
    while (amount >= 0) {
        list[i] = list[i - 2] + list[i - 1];
        i++;
        amount--;
    }

    // console.log(list);
    return list;
}


// Happy countdown
function happyCountdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    let date = new Date();
    let year = date.getFullYear();
    console.log('Happy', year);
}


// Declaration || Expression
let x = 6;
let y;
function example() {
    return x * y;
}

y = 5;

function example2() {
    return x * y;
}






















//
