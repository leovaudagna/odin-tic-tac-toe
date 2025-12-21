//GAMEBOARD

//PLAYERS



//RESULT

//GAME

//CHOOSE 
function choose(gameboard){
        do {
        validMove = false;
        let playerTurn = Number.parseInt(prompt("Choose a spot (1-9): / 0 = EXIT "));
        
        if(playerTurn < 1 || playerTurn > 9){
            console.log("NO ES VALIDO");
            
            validMove = true;
        } else {
            switch(playerTurn){
                case 1:
                    console.log("GOL")
                    gameboard[0] = "X";
                    validMove = true;
                    break;
                case 2:
                    gameboard[1] = "X";
                    validMove = true;
                    break;
                case 3:
                    gameboard[2] = "X";
                    validMove = true;
                    break;
                case 4:
                    gameboard[3] = "X";
                    validMove = true;
                    break;
                case 5:
                    gameboard[4] = "X";
                    validMove = true;
                    break;
                case 6:
                    gameboard[5] = "X";
                    validMove = true;
                    break;
                case 7:
                    gameboard[6] = "X";
                    validMove = true;
                    break;
                case 8:
                    gameboard[7] = "X";
                    validMove = true;
                    break;
                case 9:
                    gameboard[8] = "X";
                    validMove = true;
                    break;

                case 0:
                    console.log("EXIT");
                    validMove = true;
                    break;
                default:
                    console.log("That is not a valid number. Try again");
                    break;
            }            
        }
    } while (!validMove);
}

function checkWin(gameboard){

    let juegoTerminado = false;

    if(
        //HORIZONTAL
        (gameboard[0] == "X" && gameboard[1] == "X" && gameboard[2] == "X") ||
        (gameboard[3] == "X" && gameboard[4] == "X" && gameboard[5] == "X") ||
        (gameboard[6] == "X" && gameboard[7] == "X" && gameboard[8] == "X") ||

        //VERTICAL
        (gameboard[0] == "X" && gameboard[3] == "X" && gameboard[6] == "X") ||
        (gameboard[1] == "X" && gameboard[4] == "X" && gameboard[7] == "X") ||
        (gameboard[2] == "X" && gameboard[5] == "X" && gameboard[8] == "X") ||

        //CRUZADO
        (gameboard[0] == "X" && gameboard[4] == "X" && gameboard[8] == "X") ||
        (gameboard[2] == "X" && gameboard[4] == "X" && gameboard[6] == "X")
    ) {
        console.log("GANASTE");
        juegoTerminado = true;                
    } else {
        juegoTerminado = false;
    }

    return juegoTerminado;
}

function startGame(){

    const gameboard = ["0", "1", "2", 
                       "3", "4", "5",
                       "6", "7", "8"];

    let showGameboard = (gameboard) => console.log(gameboard);


    let continueGame = true;

    do {
        choose(gameboard);    
        showGameboard(gameboard);
        let juegoTerminado = checkWin(gameboard);
        if(juegoTerminado) { continueGame = false; }

    } while (continueGame);
    
   
    
 
    
    
    
}


startGame();