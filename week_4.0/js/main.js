const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];


const allMyRecords = [
   ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
   ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];


// Generate a random number with a max
function randomNum(max) {
    let r = Math.floor(Math.random() * max);
    return r;
}


// Returns a random val from an array
function randomArrayVal(arr) {
    let len = arr.length;
    let val = arr[randomNum(len)];
    return val;
}


// Logs a 2 demensional array
function logDimensionalArray(arr) {
    for (let i in arr) {
        for (let j in arr[i]) {
            console.log(arr[i][j]);
        }
        console.log('----------------');
    }
}


// Filters lap rounds
const filteredLapRoundsWithForLoop = function () {
   let newArray = [];
   for (let i = 0; i < lapRounds.length; i++) {
       if (lapRounds[i] < 4) {
           newArray.push(lapRounds[i]);
       }
   }
   return newArray;
}


// Returns number if smaller then 4
function smallerThanFour(num) {
    return num < 4;
}


// Filters numbers from array that are bigger then 4
function filterLapRound(arr) {
    console.log(arr);
    let newArr = [];
    newArr = arr.filter(smallerThanFour);
    return newArr;
}
















//
