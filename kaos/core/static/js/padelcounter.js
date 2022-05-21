
function addPoints(value){
    // const addPoints = document.getElementById("addPoint")
    // const addGame = document.getElementById("addGame")
    // const addSet = document.getElementById("addSet")

    var pvalue = 15
    var bvalue = value
    var addPoints = document.getElementById("points-"+bvalue)
    var addGame = document.getElementById("games-"+bvalue)
    var addSet = document.getElementById("sets-"+bvalue)

    if (addPoints.innerHTML == parseInt(30)) {
        pvalue = 10
    }

    if (document.getElementById("points-team1").innerHTML == "AD" & bvalue == "team2") {
        document.getElementById("points-team1").innerHTML = parseInt(40)
        return
    }else if (document.getElementById("points-team2").innerHTML == "AD" & bvalue == "team1"){
        document.getElementById("points-team2").innerHTML = parseInt(40)
        return
    }

    if (document.getElementById("points-team1").innerHTML == parseInt(40) & document.getElementById("points-team2").innerHTML == parseInt(40)) {
        // addPoints.innerHTML = parseInt(addPoints.innerHTML)+"*"
        addPoints.innerHTML = "AD"

    }else if (addPoints.innerHTML == parseInt(40) | addPoints.innerHTML == "AD"){
        addGame.innerHTML = parseInt(addGame.innerHTML)+1
        document.getElementById("points-team1").innerHTML = 0
        document.getElementById("points-team2").innerHTML = 0

        var gamesteam1 = document.getElementById("games-team1").innerHTML
        var gamesteam2 = document.getElementById("games-team2").innerHTML
        var games_diff = gamesteam1-gamesteam2
        console.log(parseInt(games_diff))

        if (addGame.innerHTML >= parseInt(6) & Math.abs(parseInt(games_diff)) >= Math.abs(parseInt(2))) {
            addSet.innerHTML = parseInt(addSet.innerHTML)+1
            document.getElementById("games-team1").innerHTML = 0
            document.getElementById("games-team2").innerHTML = 0
        }

    }else{
        addPoints.innerHTML = parseInt(addPoints.innerHTML)+parseInt(pvalue)
    }

}

function removePoints(value) {
    
    var pvalue = 15
    var bvalue = value
    var removePoints = document.getElementById("points-"+bvalue)
    var removeGame = document.getElementById("games-"+bvalue)
    var removeSet = document.getElementById("sets-"+bvalue)

    if (removePoints.innerHTML == parseInt(40)) {
        pvalue = 10
    }
    if (removePoints.innerHTML == "AD") {
        removePoints.innerHTML = parseInt(40)
    }else if (removePoints.innerHTML == parseInt(0)){
        if (removePoints.innerHTML == parseInt(0) && removeGame.innerHTML == parseInt(0)) {
            removeSet.innerHTML = parseInt(removeSet.innerHTML)-1
            if (removeSet.innerHTML <= parseInt(0)) {
                removeSet.innerHTML = parseInt(0)
            }
        }
        removeGame.innerHTML = parseInt(removeGame.innerHTML)-1
        if (removeGame.innerHTML <= parseInt(0)) {
            removeGame.innerHTML = parseInt(0)
        }
    }else{
        removePoints.innerHTML = parseInt(removePoints.innerHTML)-parseInt(pvalue)
    }
    
}
