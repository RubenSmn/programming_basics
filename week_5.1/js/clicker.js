let counter = 0;

window.onload = function() {
    getElm('#clickerBtn').addEventListener('click', triggerClick);
}



// Increase the counter
function triggerClick() {
    counter++;
    console.log(counter);
    return scaleBtn();
}



// Scales the button
function scaleBtn() {
    let scale = 1 - (counter / 100);
    if (counter % 10 === 0) {
        getElm('#clickerBtn').style.transform = `scale(${scale})`;
    }
    return scale;
}
