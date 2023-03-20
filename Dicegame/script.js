singleplayerSelect.addEventListener("click", ()=>{
    modeSelectWrapper.style.display = "none"
    diceElement.style.display = "grid"
    pip1.style.transform = 'translate(120px, 120px)'
    pip1.style.display = 'grid'
    pip2.style.display = 'none'
    pip3.style.display = 'none'
    pip4.style.display = 'none'
    pip5.style.display = 'none'
    pip6.style.display = 'none'
    singleplayerScore.style.display = 'block'
    totalscoreP1 = 0
    turns = 0
    diceElement.addEventListener("click", ()=>{
        
        pip1.style.transform = 'translate(120px, 120px)'
        pip1.style.display = 'grid'
        pip2.style.display = 'none'
        pip3.style.display = 'none'
        pip4.style.display = 'none'
        pip5.style.display = 'none'
        pip6.style.display = 'none'
        turns = turns + 1
        diceRoll = Math.floor(Math.random() * 6) + 1;
        totalscoreP1 = totalscoreP1 + diceRoll
        singleplayerScore.textContent = totalscoreP1
        if (diceRoll === 1 && totalscoreP1 < 20){
            pip1.style.display = 'grid'
            pip1.style.transform = 'translate(120px, 120px)'
            singleplayerScore.textContent = `GAME OVER (scored ${totalscoreP1} points)`
            totalscoreP1 = 0
            turns = 0
            return
        }
        if (diceRoll === 2){
            pip1.style.display = 'grid'
            pip2.style.display = 'grid'
            pip1.style.transform = 'translate(180px, 180px)'
            pip2.style.transform = 'translate(60px, -90px)'
        }
        if (diceRoll === 3){
            pip1.style.display = 'grid'
            pip2.style.display = 'grid'
            pip3.style.display = 'grid'
            pip1.style.transform = 'translate(120px, 120px)'
            pip2.style.transform = 'translate(50px, -50px)'
            pip3.style.transform = 'translate(195px, -10px)'
        }
        if (diceRoll === 4){
            pip1.style.display = 'grid'
            pip2.style.display = 'grid'
            pip3.style.display = 'grid'
            pip4.style.display = 'grid'
            pip1.style.transform = 'translate(50px, 186px)'
            pip2.style.transform = 'translate(50px, -15px)'
            pip3.style.transform = 'translate(185px, -90px)'
            pip4.style.transform = 'translate(185px, -40px)'
        }
        if (diceRoll === 5){
            pip1.style.display = 'grid'
            pip2.style.display = 'grid'
            pip3.style.display = 'grid'
            pip4.style.display = 'grid'
            pip5.style.display = 'grid'
            pip1.style.transform = 'translate(50px, 186px)'
            pip2.style.transform = 'translate(50px, -15px)'
            pip3.style.transform = 'translate(185px, -75px)'
            pip4.style.transform = 'translate(185px, 5px)'
            pip5.style.transform = 'translate(120px, -120px)'
        }
        if (diceRoll === 6){
            pip1.style.display = 'grid'
            pip2.style.display = 'grid'
            pip3.style.display = 'grid'
            pip4.style.display = 'grid'
            pip5.style.display = 'grid'
            pip6.style.display = 'grid'
            pip1.style.transform = 'translate(50px, 186px)'
            pip2.style.transform = 'translate(50px, -15px)'
            pip3.style.transform = 'translate(185px, -75px)'
            pip4.style.transform = 'translate(185px, 5px)'
            pip5.style.transform = 'translate(50px, -125px)'
            pip6.style.transform = 'translate(185px, -185px)'
        }
        if (totalscoreP1 >= 20){
            singleplayerScore.textContent = `YOU WON (in ${turns} turns)`
            totalscoreP1 = 0
            turns = 0
            return
        }
    });
});

function diceclick1() {
    pip1.style.transform = 'translate(120px, 120px)'
    pip1e1.style.display = 'grid'
    pip2e1.style.display = 'none'
    pip3e1.style.display = 'none'
    pip4e1.style.display = 'none'
    pip5e1.style.display = 'none'
    pip6e1.style.display = 'none'
    turns = turns + 1
    diceRoll = Math.floor(Math.random() * 6) + 1;
    totalscoreP1 = totalscoreP1 + diceRoll
    player1Score.textContent = totalscoreP1
    if (diceRoll === 1 && totalscoreP1 < 20){
        pip1e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(120px, 120px)'
        singleplayerScore.textContent = `PLAYER 2 WON (player 1 rolled a 1)`
        totalscoreP1 = 0
        totalscoreP2 = 0
        turns = 0
        restartButton.style.display = "block"
        dicePlayer2.removeEventListener("click", diceclick2, false);
        dicePlayer1.removeEventListener("click", diceclick1, false);
        return
    }
    if (diceRoll === 2){
        pip1e1.style.display = 'grid'
        pip2e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(180px, 180px)'
        pip2e1.style.transform = 'translate(60px, -90px)'
    }
    if (diceRoll === 3){
        pip1e1.style.display = 'grid'
        pip2e1.style.display = 'grid'
        pip3e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(120px, 120px)'
        pip2e1.style.transform = 'translate(50px, -50px)'
        pip3e1.style.transform = 'translate(195px, -10px)'
    }
    if (diceRoll === 4){
        pip1e1.style.display = 'grid'
        pip2e1.style.display = 'grid'
        pip3e1.style.display = 'grid'
        pip4e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(50px, 186px)'
        pip2e1.style.transform = 'translate(50px, -15px)'
        pip3e1.style.transform = 'translate(185px, -90px)'
        pip4e1.style.transform = 'translate(185px, -40px)'
    }
    if (diceRoll === 5){
        pip1e1.style.display = 'grid'
        pip2e1.style.display = 'grid'
        pip3e1.style.display = 'grid'
        pip4e1.style.display = 'grid'
        pip5e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(50px, 186px)'
        pip2e1.style.transform = 'translate(50px, -15px)'
        pip3e1.style.transform = 'translate(185px, -75px)'
        pip4e1.style.transform = 'translate(185px, 5px)'
        pip5e1.style.transform = 'translate(120px, -120px)'
    }
    if (diceRoll === 6){
        pip1e1.style.display = 'grid'
        pip2e1.style.display = 'grid'
        pip3e1.style.display = 'grid'
        pip4e1.style.display = 'grid'
        pip5e1.style.display = 'grid'
        pip6e1.style.display = 'grid'
        pip1e1.style.transform = 'translate(50px, 186px)'
        pip2e1.style.transform = 'translate(50px, -15px)'
        pip3e1.style.transform = 'translate(185px, -75px)'
        pip4e1.style.transform = 'translate(185px, 5px)'
        pip5e1.style.transform = 'translate(50px, -125px)'
        pip6e1.style.transform = 'translate(185px, -185px)'
    }
    if (totalscoreP1 >= 20){
        singleplayerScore.textContent = `PLAYER 1 WON (in ${turns} turns)`
        dicePlayer1.removeEventListener("click", diceclick1, false)
        restartButton.style.display = "block"
        totalscoreP1 = 0
        totalscoreP2 = 0
        turns = 0
        return
    }
    dicePlayer1.removeEventListener("click", diceclick1, false)
    dicePlayer2.addEventListener("click", diceclick2, false);
}

function diceclick2() {
    pip1e2.style.transform = 'translate(120px, 120px)'
    pip1e2.style.display = 'grid'
    pip2e2.style.display = 'none'
    pip3e2.style.display = 'none'
    pip4e2.style.display = 'none'
    pip5e2.style.display = 'none'
    pip6e2.style.display = 'none'
    diceRoll = Math.floor(Math.random() * 6) + 1;
    totalscoreP2 = totalscoreP2 + diceRoll
    player2Score.textContent = totalscoreP2
    if (diceRoll === 1 && totalscoreP2 < 20){
        pip1e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(120px, 120px)'
        singleplayerScore.textContent = `PLAYER 1 WON (player 2 rolled a 1)`
        totalscoreP1 = 0
        totalscoreP2 = 0
        turns = 0
        dicePlayer2.removeEventListener("click", diceclick2, false);
        dicePlayer1.removeEventListener("click", diceclick1, false);
        restartButton.style.display = "block"
        return
    }
    if (diceRoll === 2){
        pip1e2.style.display = 'grid'
        pip2e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(180px, 180px)'
        pip2e2.style.transform = 'translate(60px, -90px)'
    }
    if (diceRoll === 3){
        pip1e2.style.display = 'grid'
        pip2e2.style.display = 'grid'
        pip3e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(120px, 120px)'
        pip2e2.style.transform = 'translate(50px, -50px)'
        pip3e2.style.transform = 'translate(195px, -10px)'
    }
    if (diceRoll === 4){
        pip1e2.style.display = 'grid'
        pip2e2.style.display = 'grid'
        pip3e2.style.display = 'grid'
        pip4e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(50px, 186px)'
        pip2e2.style.transform = 'translate(50px, -15px)'
        pip3e2.style.transform = 'translate(185px, -90px)'
        pip4e2.style.transform = 'translate(185px, -40px)'
    }
    if (diceRoll === 5){
        pip1e2.style.display = 'grid'
        pip2e2.style.display = 'grid'
        pip3e2.style.display = 'grid'
        pip4e2.style.display = 'grid'
        pip5e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(50px, 186px)'
        pip2e2.style.transform = 'translate(50px, -15px)'
        pip3e2.style.transform = 'translate(185px, -75px)'
        pip4e2.style.transform = 'translate(185px, 5px)'
        pip5e2.style.transform = 'translate(120px, -120px)'
    }
    if (diceRoll === 6){
        pip1e2.style.display = 'grid'
        pip2e2.style.display = 'grid'
        pip3e2.style.display = 'grid'
        pip4e2.style.display = 'grid'
        pip5e2.style.display = 'grid'
        pip6e2.style.display = 'grid'
        pip1e2.style.transform = 'translate(50px, 186px)'
        pip2e2.style.transform = 'translate(50px, -15px)'
        pip3e2.style.transform = 'translate(185px, -75px)'
        pip4e2.style.transform = 'translate(185px, 5px)'
        pip5e2.style.transform = 'translate(50px, -125px)'
        pip6e2.style.transform = 'translate(185px, -185px)'
    }
    if (totalscoreP2 >= 20){
        singleplayerScore.textContent = `PLAYER 2 WON (in ${turns} turns)`
        dicePlayer2.removeEventListener("click", diceclick2, false)
        restartButton.style.display = "block"
        totalscoreP1 = 0
        totalscoreP2 = 0
        turns = 0
        return
    }
    dicePlayer1.addEventListener("click", diceclick1, false);
    dicePlayer2.removeEventListener("click", diceclick2, false);
}

function multiplayerSequence() {
    totalscoreP1 = 0
    totalscoreP2 = 0
    turns = 0
    player2Score.textContent = totalscoreP2
    player1Score.textContent = totalscoreP1
    restartButton.style.display = "none"
    singleplayerScore.style.display = 'block'
    modeSelectWrapper.style.display = "none"
    dicePlayer1.style.display = "grid"
    dicePlayer2.style.display = "grid"
    pip1e1.style.transform = 'translate(120px, 120px)'
    pip1e1.style.display = 'grid'
    pip2e1.style.display = 'none'
    pip3e1.style.display = 'none'
    pip4e1.style.display = 'none'
    pip5e1.style.display = 'none'
    pip6e1.style.display = 'none'
    pip1e2.style.transform = 'translate(120px, 120px)'
    pip1e2.style.display = 'grid'
    pip2e2.style.display = 'none'
    pip3e2.style.display = 'none'
    pip4e2.style.display = 'none'
    pip5e2.style.display = 'none'
    pip6e2.style.display = 'none'
    player1Score.style.display = 'block'
    player2Score.style.display = 'block'
    totalscoreP1 = 0
    totalscoreP2 = 0
    turns = 0
    whosTurn = Math.floor(Math.random() * 2) + 1;
    singleplayerScore.textContent = `Player ${whosTurn} starts!`
    if (whosTurn === 1){
        dicePlayer1.addEventListener("click", diceclick1, false);
        
    }
    else {
        dicePlayer2.addEventListener("click", diceclick2, false)
    };
    turns = turns + 1
}


multiplayerSelect.addEventListener("click", multiplayerSequence, false)

restartButton.addEventListener("click", multiplayerSequence, false)