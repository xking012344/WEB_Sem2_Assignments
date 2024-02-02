function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again"
}

function mouseOutHandler() {
    document.getElementById("demo").innerHTML = "Bye";
}

function keyDownHandler() {
    let x = 5
    let y = x + 7
    document.getElementById("demo").innerHTML = y
    
}

function keyUpHandler() {
    document.getElementById("kitties").hidden = true;
}

function onClickHandler() {
    document.getElementById("demo").innerHTML = Date();
}

function onLoadHandler() {
    document.getElementById("demo").innerHTML = "done";
}

function onChangeHandler() {
    document.getElementById("demo").innerHTML = "change complete";
}