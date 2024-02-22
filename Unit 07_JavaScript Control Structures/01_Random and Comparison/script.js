function Roll(){
    var diceElement = document.getElementById("dice");
    // diceElement.src = "images/dice3.jpg";
    let random = Math.random() * 6 + 1;
    random = Math.trunc(random);
    // console.log(random);

    if(random === 1){
        diceElement.src = "images/dice1.jpg";
    } else if(random === 2){
        diceElement.src = "images/dice2.jpg";
    }
    //TODO:  YOU do 3 to 6



}