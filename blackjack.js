//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
let player = {
    names:"SIVA",
    chips:192
}
let cards = [] //array-ordered list of array
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let newEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.names +" :$"+ player.chips 

console.log(cards)
alert("Welcome to the card game! Let's get started!");

function getRandomCard(){
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    
    renderGame()
    
}

function renderGame() {

    //cardEl.textContent = "Cards:"+ cards[0] + " "+ cards[1] 
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card 😃"
    }
    else if (sum === 21) {
        message = "whoo you have got blackjack 😄"
        hasBlackjack = true
    }
  
    else {
        message = "you are out of the game 😈"
        isAlive = false    

    }
    messageEl.textContent = message
   


}

function newCards() {
    if(isAlive === true && hasBlackjack === false){
        let thirdcard = getRandomCard()
        sum += thirdcard
        //alert("you are out")
        cards.push(thirdcard)
       
        renderGame()
        
    }
    
}