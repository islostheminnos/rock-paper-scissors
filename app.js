// Design the HTML page
// Add styles


// Use an array which contains "rock", "paper", and "scissors"

let optionsContainer = ["rock", "paper", "scissors"]
let computerCard = document.querySelector(".computer-card")
let scissorsBtn = document.querySelector(".scissors")
let rockBtn = document.querySelector(".rock")
let paperBtn = document.querySelector(".paper")
let playerCard = document.querySelector(".player-card")
let whoWon = document.createElement("p")
let container= document.querySelector(".container")
let playerChoice;
let computerChoice
//Write a function which picks a random choice for computer
let generateCompHand = ()=>{
    let randomlyGenerated = optionsContainer[Math.floor(Math.random() * optionsContainer.length -1) +1]
    computerChoice = randomlyGenerated
    return randomlyGenerated   
}

// Generate an image related to randomly picked option (rock, paper or scissors)
let generateImage = ()=>{
    imageAnimation()
    return `images/${generateCompHand()}.png`
    
}

// Generate all 3 images in a div for 5 seconds so the player can have a better game experience
let imageAnimation = ()=>{
    computerCard.classList.toggle("anim-card")
}
imageAnimation()

scissorsBtn.addEventListener("click", ()=>{
    whoWon.innerText = ""
    playerChoice = "scissors"
    imageAnimation()
    playerCard.style.background = `url("images/scissors.png") no-repeat center center`
    playerCard.style.backgroundSize = "cover"
    setTimeout(()=>{
        computerCard.style.background = `url("${generateImage()}") no-repeat center center`
        computerCard.style.backgroundSize = "cover"
        printWinner()
    }, 3000)
})


rockBtn.addEventListener("click", ()=>{
    whoWon.innerText = ""
    playerChoice = "rock"
    imageAnimation()
    playerCard.style.background = `url("images/rock.png") no-repeat center center`
    playerCard.style.backgroundSize = "cover"
    setTimeout(()=>{
        computerCard.style.background = `url("${generateImage()}") no-repeat center center`
        computerCard.style.backgroundSize = "cover"
        printWinner()
    }, 3000)
})

paperBtn.addEventListener("click", ()=>{
    whoWon.innerText = ""
    playerChoice = "paper"
    imageAnimation()
    playerCard.style.background = `url("images/paper.png") no-repeat center center`
    playerCard.style.backgroundSize = "cover"
    setTimeout(()=>{
        computerCard.style.background = `url("${generateImage()}") no-repeat center center`
        computerCard.style.backgroundSize = "cover"
        printWinner()
    }, 3000)
})






// Program the logic (if player is rock and computer is paper computer wins etc.)

let printWinner = ()=>{
    container.append(whoWon)
    whoWon.style.fontSize = "30px"
    whoWon.style.fontWeight = 800
    whoWon.style.color = "white"
    if(playerChoice === "scissors" && computerChoice === "rock"){
        whoWon.innerText = "Computer Won!"
      
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        whoWon.innerText = "Player Won!"
        
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
        whoWon.innerText = "Player Won!"
       
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        whoWon.innerText = "Computer Won!"
         
    }
     else if(playerChoice === "paper" && computerChoice === "rock"){
        whoWon.innerText = "Player Won!"
        
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        whoWon.innerText = "Computer Won!"
        
    }
    else if(playerChoice === computerChoice){
        whoWon.innerText = "It's Draw"
       
    }
}

// Create a paragraph element on DOM which contains "player win" or "computer win"



// Maybe I can program a "betting" logic later..