function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}

// Make another function for takeAbsoluteValue

function takeAbsoluteValue() {
    let number = +document.getElementById("input2").value;

    let absoluteValue = Math.abs(number);
    document.getElementById("result2").innerHTML = absoluteValue;
}
