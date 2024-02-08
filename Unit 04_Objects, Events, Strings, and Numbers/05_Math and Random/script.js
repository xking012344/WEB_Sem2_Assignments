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

function takeSine() {
    let number = +document.getElementById("input3").value;

    let sine = Math.sin(number * Math.PI / 180);
    document.getElementById("result3").innerHTML = sine;
}

function takeCosine() {
    let number = +document.getElementById("input4").value;

    let cosine = Math.cos(number * Math.PI / 180);
    document.getElementById("result4").innerHTML = cosine;
}

function takeRandom(){
    document.getElementById("result5").innerHTML = Math.random();

}
