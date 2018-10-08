// Returns elements
function getElm(selec) {
    return document.querySelectorAll(selec);
}

// Creates element
function createElm(type) {
    return document.createElement(type);
}



// Opdracht 1
// Calculates average
function calcAverage() {
    let elm = getElm('table tr');
    let sum = 0;
    let len = elm.length;
    for (let i = 0; i < len; i++) {
        sum += parseFloat(elm[i].children[1].innerText);
        console.log(sum);
    }
    let average = sum / len;
    return Math.floor(average * 10) / 10;
}


// Add average grade to table
function showAverage() {
    let elm = getElm('table')[0].children[0];
    let tr = createElm('TR');
    let td1 = createElm('TD');
    let td2 = createElm('TD');
    td1.innerText = 'Average grade';
    td2.innerText = calcAverage();
    tr.innerHTML += td1.outerHTML + td2.outerHTML;
    elm.appendChild(tr);
}



// Opdracht 2
// Changes backgroundcolor
function changeBackground() {
    let li = getElm('ul.course')[0].children;
    let len = li.length
    for (let i = 0; i < len; i += 2) {
        li[i].style.backgroundColor = '#CC3';
    }
    return li;
}



// Opdracht 3
// Creates a image element
function createImageElement(src) {
    let img = createElm('IMG');
    img.src = src;
    let body = getElm('body')[0];
    return body.appendChild(img);
}
