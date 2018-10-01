let numberList = [];


// Make an array of random numbers, add an array an the amount of random numbers you want
function addRandomNumbers(list, amount) {
    while (amount >= 0) {
        list.push(Math.round(Math.random() * 100));
        amount--;
    }
    return list;
}


// Checks if numbers in array can be divided by 4, add an array
function checkDivideByFour(list) {
    let len = list.length;
    while (len >= 0) {
        if (list[len] % 4 === 0) {
            console.log(list[len] + ' can be divided by 4');
        } else {
            console.error(list[len] + ' can\'t be divided by 4');
        }
        len--;
    }
}


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


// Sum all numbers in an array, add an array
function sumArray(list) {
    let len = list.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += list[i];
    }
    return sum;
}

// Testing for sumArray()
let x = [2,4,8,9,12,13];
sumArray(x);




















//
