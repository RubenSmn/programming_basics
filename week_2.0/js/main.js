window.onload = function() {

    // Activates when odd even button is clicked
    document.querySelector('#oddEvenButton').onclick = function() {
        let number = document.querySelector('#oddEvenInput').value;
        if (number) {
            let result = oddOrEven(number);
            console.log('The number ' + number + ' is ' + result);
            document.querySelector('#oddEvenResult').innerText = 'The number ' + number + ' is ' + result;
        } else {
            document.querySelector('#oddEvenResult').innerText = 'Fill in a number please!';
            console.log('nope');
        }
    }


    // Activates when remove not button is clicked
    document.querySelector('#removeNotButton').onclick = function() {
        let string = document.querySelector('#removeNotInput').value;
        if (string) {
            let result = removeNot(string);
            document.querySelector('#removeNotResult').innerText = result;
        } else {
            document.querySelector('#removeNotResult').innerText = 'Fill in an sentence please!';
            console.log('Nope');
        }
    }


    // Activates when compare button is clicked
    document.querySelector('#compareIntStringButton').onclick = function() {
        let result = compareIntString();
        document.querySelector('#compareIntStringResult').innerText = result;
    }
}


// Check for odd or even
function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log('even');
        return 'even';
    } else {
        console.log('odd');
        return 'odd';
    }
}


// Removes word 'not'
function removeNot(str) {
    str = str.replace(/not /gi, '');
    console.log(str);
    return str;
}


// Compare 1400 and 'Ik woon in Naboo'
function compareIntString() {
    if (1400 === 'Ik woon in Naboo') {
        console.log('Hetzelfde');
        return 'Deze waarden zijn hetzelfde';
    } else {
        console.log('Niet hetzelfde');
        return 'Deze waarden zijn niet hetzelfde';
    }
    /*
    Dit is niet een slimme vraag omdat,
    1400 een integer is en 'Ik woon in Naboo' is een string.
    Dit zijn verschillende data-types en kunnen dus niet vergeleken worden.
    */
}
















//
