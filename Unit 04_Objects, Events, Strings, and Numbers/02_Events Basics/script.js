function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again"
}

function mouseOutHandler() {
    document.getElementById("demo").innerHTML = "Bye";
}

function keyDownHandler() {
    document.getElementById("demo").innerHTML = "HI"
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