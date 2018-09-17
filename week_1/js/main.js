const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Standard Style
ctx.strokeStyle = '#0F16D6';
ctx.fillStyle = '#FFFFFF';


window.onload = function() {
    // Onclik on button to active drawDiamond
    document.querySelector('#draw_button').onclick = function() {
        drawDiamond();
    };

    // Onchange on the input, active changeLineColor
    document.querySelector('#change_line_color').onchange = function() {
        changeLineColor(this);
    };

    // Onchange on the input, active changeFillColor
    document.querySelector('#change_fill_color').onchange = function() {
        changeFillColor(this);
    };
}


// Diamond data
let diamond = {
    start: {
        x: 150,
        y: 50
    },
    points: [
        [
            250,50
        ],
        [
            300,75
        ],
        [
            350,150
        ],
        [
            200,350
        ],
        [
            50,150
        ],
        [
            100,75
        ],
        [
            150,50
        ]
    ]
};


// Draw a Line
function drawLine(x, y) {
    ctx.lineTo(x, y);
}


// Draw Diamond
function drawDiamond() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 3;
    let start = diamond.start;
    ctx.moveTo(start.x, start.y);
    for (let i in diamond.points) {
        let d = diamond.points;
        // console.log(d);
        drawLine(d[i][0], d[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}


// Change Line Color
function changeLineColor(that) {
    ctx.strokeStyle = that.value;
    drawDiamond();
}


// Change Fill Color
function changeFillColor(that) {
    ctx.fillStyle = that.value;
    drawDiamond();
}

























//
