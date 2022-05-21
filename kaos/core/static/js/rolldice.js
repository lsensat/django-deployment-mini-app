const selectMenu = document.getElementById('dice');
const options = new Array(200)
.fill()
.reduce((html,_,i) => html += `<option value=${i+1}>${i+1}</option>`, '');
selectMenu.innerHTML = options;


function rolldice() {

    var selectDice = document.getElementById('dice');
    var output = selectDice.value
    console.log(output)

    var restart = document.getElementById("results");
    while ( restart.firstChild ) restart.removeChild( restart.firstChild );

    for (let index = 1; index <= output; index++) {

        var randomNumber = Math.floor(Math.random()*6)+1;
        var randomFaceCoin = ""

        if (randomNumber % 2 == 0) {
            randomFaceCoin = " (heads)"
        } else {
            randomFaceCoin = " (tails)"
        }

        const paragraph = document.createElement("p");
        const node = document.createTextNode("Dice " + index + " result is " + randomNumber + randomFaceCoin);
        paragraph.appendChild(node);

        const element = document.getElementById("results");
        element.appendChild(paragraph);


    }

}