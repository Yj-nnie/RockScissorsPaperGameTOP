function getComputerChoice(){

    let optionList=["rock", "scissors", "paper"]
    var randomKey = Math.floor(Math.random() * (optionList.length));
    var choice = optionList[randomKey]
    return choice;
}

function playRound(playerChoice, computerChoice){
    
    let result = "";

    const resultDisplay = document.createElement('p');
        
        if(playerChoice.toLowerCase() === "rock"){
            
            if(computerChoice === "paper"){
                result = "You loose, paper beats rock!";
                // this means Computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)

            } 
            if(computerChoice === "scissors"){
                result="You win, rock beats scissors";
                // this means player ++
                humanScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            }
            if(computerChoice === "rock"){ 
                result="draw";
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            }

            
        }

        if(playerChoice.toLowerCase() === "paper"){
            
            if(computerChoice === "scissors"){
                result = "You loose, scissors beats paper!";
                // this means computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            } 
            if(computerChoice === "rock"){
                result = "You win, paper beats rock!";
          
                // this means player++
                humanScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            }
            if(computerChoice === "paper"){ result="draw";
            console.log('human:' + humanScore + ' computer: ' + computerScore)
            }
        }

        if(playerChoice.toLowerCase() === "scissors"){
            
            if(computerChoice === "rock"){
                result="You loose, rock beats scissors!";
     
                // this means computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            } 
            if(computerChoice === "paper"){
                result="You win, scissors beats paper!";
             
                // this means player ++
                humanScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            }
            if(computerChoice === "scissors"){
                result="draw";
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            }
            
        }

    resultDisplay.textContent = result; 
    contentDisplay.appendChild(resultDisplay);
    scoreDisplay()
    checkScores()

}

function checkScores(){

    if(humanScore === 5 || computerScore === 5) {
        console.log('FINISH: human:' + humanScore + ' computer: ' + computerScore)
        pickTheWinner()
    }
 
}

function scoreDisplay(){

    const playersScoreDisplay_holder = document.querySelector('.scoreLive')
    playersScoreDisplay_holder.textContent = " ";
    playersScoreDisplay_holder.textContent = 'Scores-> You: ' + humanScore + ' VS ' + 'Computer score: ' + computerScore;
}

function progressDisplay(playerChoice,computerChoice){

    const gameProgress_C = document.createElement('p');
    const gameProgress_p = document.createElement('p');

    gameProgress_p.textContent =  'You chose: ' + playerChoice;
    contentDisplay.appendChild(gameProgress_p);

    gameProgress_C.textContent = 'Computer chooses: ' + computerChoice;
    contentDisplay.appendChild(gameProgress_C);
}

function pickTheWinner(){

    if(humanScore > computerScore){
        alert("you are the winner! ")
        console.log("you are the winner")
    }

    if(computerScore > humanScore){
        alert("The computer wins ")
        console.log("The computer wins")
    } 
}

function playTheGame(e){

        const playerChoice = e.currentTarget.innerText;
        const computerChoice = getComputerChoice();
        progressDisplay(playerChoice,computerChoice);

        playRound(playerChoice, computerChoice)

}



function initiateGame() {

    const choices = Array.from(document.querySelectorAll('.choices'));
    choices.forEach(function(choice){return choice.addEventListener('click', playTheGame)})           
}
 

// Global variables need to be accessible in all functions
var computerScore = 0;
var humanScore = 0;
const content = document.querySelector('body');

// default page display
let contentDisplay = document.createElement('div');
let scoreTitle = document.createElement('h1');
scoreTitle.classList.add('scoreLive')
scoreTitle.textContent = 'Scores-> You: ' +  humanScore + ' VS ' + 'Computer score: ' + computerScore;

// update plage display to DOM 
content.appendChild(contentDisplay)
contentDisplay.appendChild(scoreTitle)

// start playing the game
initiateGame()


