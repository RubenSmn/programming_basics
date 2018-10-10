let shoppingList = {
    amount: 0,
    items: [],
    totalPrice: 0,
    calcTotalPrice: function() {
        let total = 0;
        for (let i in this.items) {
            let dit = this.items[i].price.replace(',', '.');
            total += parseFloat(dit);
        }
        this.totalPrice = Math.floor(total * 100) / 100;
    },
}


// Return element(s)
function getElm(selec, amount) {
    let result;
    if (amount === 'm') {
        result = document.querySelectorAll(selec);
    } else {
        result = document.querySelector(selec);
    }
    return result;
}



// Creates a new element
function newElm(type) {
    return document.createElement(type);
}



// Triggers when window loads
window.onload = function() {
    getElm('#shoppingListForm button').addEventListener('click', getInputData);

    // Sets a example
    let name = 'Banana';
    let price = '5,00';
    let item = newItem(name, price);
    addToShoppingList(item);
}



// Displays information message
function infoMessage(msg, type) {
    let elm = getElm('#informationMessage');
    switch (type) {
        case 'inf':
                elm.style.color = '#FFF';
            break;
        case 'err':
                elm.style.color = '#FF5500';
            break;
        case 'war':
                elm.style.color = 'yellow';
            break;
        default:
            elm.style.color = 'white';
    }
    return elm.innerText = msg;
}



// Gets input data from shopping list form
function getInputData() {
    let input = getElm('#shoppingListForm input', 'm');
    let name = input[0].value;
    let price = input[1].value;
    console.log(price);

    let isNum = /^[0-9,]+$/.test(price);
    console.log(isNum);

    let isValid = price.split(',');
    console.log(isValid);

    if (name === '') {
        return infoMessage('Please enter a valid name', 'err');
    } else if (!isNum) {
        return infoMessage('Please enter a valid price', 'err');
    } else if (isValid[1].length !== 2) {
        return infoMessage('Please enter a valid price', 'err');
    }

    let item = newItem(name, price);
    console.log(item);

    input[0].value = '';
    input[1].value = '';

    return addToShoppingList(item);
}



// Returns a new item object
function newItem(name, price) {
    let item = {
        name: name,
        price: price
    }
    return item;
}



// Adds new item to shoppinglist
function addToShoppingList(item) {
    shoppingList.items.push(item);
    shoppingList.amount++;
    updateTotal();

    const add = `<span>${item.name}</span><span>€${item.price}</span><span>Remove</span>`;
    const li = newElm('LI');
    li.innerHTML = add;

    li.childNodes[2].addEventListener('click', removeFromShoppingList);

    getElm('#shoppingList').appendChild(li);

    return infoMessage(`You have just added '${item.name}' to your shoppinglist!`, 'inf');
}



// Removes items from shoppinglist
function removeFromShoppingList() {
    let prt = this.parentNode.parentNode;
    console.log(prt);

    let shopElms = prt.getElementsByTagName('li');
    let index;
    // Gets index of list element
    for (index = 0; index < shopElms.length; index++) {
        if (shopElms[index] === this.parentNode) break;
    }
    console.log(index);

    let item = shoppingList.items[index - 1];

    shoppingList.items.splice(index - 1, 1);
    shoppingList.amount--;
    updateTotal();

    prt.removeChild(this.parentNode);
    return infoMessage(`You have just removed '${item.name}' from your shoppinglist`, 'war');
}



// Updates total amount and price
function updateTotal() {
    shoppingList.calcTotalPrice();
    const elm = getElm('#shoppingListTotal').children;
    elm[1].innerText = shoppingList.amount;
    elm[3].innerText = '€' + shoppingList.totalPrice.toString().replace('.', ',');
}
