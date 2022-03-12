document.addEventListener('DOMContentLoaded', ()=>{

  let boxes = document.querySelectorAll('.box')


  boxes.forEach((box) =>{
    box.addEventListener('click', handleclick)
  })

})
function handleclick(event){

  let square = event.target
  let position = square.id

  if(handleMove(position)){
   
    setTimeout(() => {
      alert('O jogo acabou - O Vencedor foi ' + playerTime)
    }, 10);
    
  }
  updateSquares()

}
function updateSquares(){
  let boxes = document.querySelectorAll('.box')


  boxes.forEach((box) =>{
    let position = box.id
    let symbol = board[position]
    if(symbol != ''){
      box.innerHTML = `<div class='${symbol}'></div>` 
    } 
    
  })
 
}

