function toRadians(angDegrees) {
    return angDegrees * Math.PI / 180;
}


function drawCircle() {
    let startAngle = +document.getElementById("startAngle").value;
    let endAngle = +document.getElementById("endAngle").value;
    let radius = +document.getElementById("radius").value;
    let centerX = +document.getElementById("centerX").value;
    let centerY = +document.getElementById("centerY").value;
    let ccw = document.getElementById("ccw").checked;


    startAngle = toRadians(startAngle);
    endAngle = toRadians(endAngle);


    const canvas = document.getElementById("myCanvas1");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, ccw);
    ctx.stroke();
}

function drawLine() {
    let startX = +document.getElementById("startX").value;
    let startY = +document.getElementById("startY").value;
    let endX = +document.getElementById("endX").value;
    let endY = +document.getElementById("endY").value;

    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

    // Define a new Path:
    ctx.beginPath();

    // Define a start Point
    ctx.moveTo(startX, startY);

    // Define an end Point
    ctx.lineTo(endX, endY);

    // Stroke it (Do the Drawing)
    ctx.stroke();
}

function drawLinearGradient() {
    var colorstop1 = document.getElementById("colorstop1").value;
    var colorstop2 = document.getElementById("colorstop2").value;
    let x0 = +document.getElementById("x0").value;
    let y0 = +document.getElementById("y0").value;
    let x1 = +document.getElementById("x1").value;
    let y1 = +document.getElementById("y1").value;


    const canvas = document.getElementById("myCanvas3");
    const ctx = canvas.getContext("2d");
    // Create gradient
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    gradient.addColorStop(0, colorstop1);
    gradient.addColorStop(1, colorstop2);
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(x0, y0, x1, y1);
}