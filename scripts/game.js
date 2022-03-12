
let board = ['','','','','','','','','']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = false
let winStates =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//verificar a posição do click e inserir um simbolo nela onde intercala as vezes do jogador se for jogador 1 vai ser jogador 2 se for jogador 2 vai ser jogador 1 ao clicar na position
function handleMove(position){
    
    if(gameOver){
        return
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime]

        gameOver = isWin()
        if(gameOver == false){

            
            if(playerTime == 0 ){
                playerTime = 1

            } else {
                playerTime = 0
            }
                    
        }

    }

return gameOver

}

//Descobrir o vencedor
function isWin() {
   
    for(let i =0; i<winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){

            return true
            
        }
        
    }
    return false
    
}

function reiniciar() {
    gameOver = false
    board = ["", "", "", "", "", "", "", "", ""]
    playerTime = 0
    let boxes = document.querySelectorAll(".box")

    for (let box of boxes) {
        box.innerHTML = ""

}
}