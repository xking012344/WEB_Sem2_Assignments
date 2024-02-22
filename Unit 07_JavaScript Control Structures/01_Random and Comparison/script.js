function Roll() {
    var diceElement = document.getElementById("dice");
    // diceElement.src = "images/dice3.jpg";
    let random = Math.random() * 6 + 1;
    random = Math.trunc(random);
    // console.log(random);

    if (random === 1) {
        diceElement.src = "images/dice1.jpg";
    } else if (random === 2) {
        diceElement.src = "images/dice2.jpg";
    }  else if (random === 3) {
        diceElement.src = "images/dice3.jpg";
    }  else if (random === 4) {
        diceElement.src = "images/dice4.jpg";
    }  else if (random === 5) {
        diceElement.src = "images/dice5.jpg";
    }  else if (random === 6) {
        diceElement.src = "images/dice6.jpg";
    }
}

function RollSwitch() {
    var diceElement = document.getElementById("diceSwitch");
    let random = Math.random() * 6 + 1;
    random = Math.trunc(random);

    switch (random) {
        case 1:
            diceElement.src = "images/dice1.jpg";
            break;
        case 2:
            diceElement.src = "images/dice2.jpg";
            break;
        case 3:
            diceElement.src = "images/dice3.jpg";
            break;
        case 4:
            diceElement.src = "images/dice4.jpg";
            break;
        case 5:
            diceElement.src = "images/dice5.jpg";
            break;
        default:
            diceElement.src = "images/dice6.jpg";
            break;

    }
}