function getComputerChoice(){

    let optionList=["rock", "scissors", "paper"]
    var randomKey = Math.floor(Math.random() * (optionList.length));
    var choice = optionList[randomKey]
    return choice;
}

function playRound(playerChoice, computerChoice){
    
    // let optionList=["rock", "scissors", "paper"];
    let result = "";
   // let score_flag = 0; // 0 means draw, 1 means lose, 2 means human wins,3 means its invalid
    const resultDisplay = document.createElement('p');

        
        if(playerChoice.toLowerCase() === "rock"){
            
            if(computerChoice === "paper"){
                result = "You loose, paper beats rock!";
             //     score_flag = 1;
                // this means Computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)

            } 
            if(computerChoice === "scissors"){
                result="You win, rock beats scissors";
             //     score_flag = 2;
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
             //     score_flag = 1;
                // this means computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            } 
            if(computerChoice === "rock"){
                result = "You win, paper beats rock!";
             //     score_flag = 2;
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
             //     score_flag = 1;
                // this means computer ++
                computerScore ++;
                console.log('human:' + humanScore + ' computer: ' + computerScore)
            } 
            if(computerChoice === "paper"){
                result="You win, scissors beats paper!";
             //     score_flag = 2;
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


}

function scoreDisplay(){
    const playersScoreDisplay_holder = document.createElement('p');
    playersScoreDisplay_holder.classList.add('scoreLive')
    playersScoreDisplay_holder.textContent = 'Your score:' + humanScore + ' VS ' + 'Computer score: ' + computerScore;
    contentDisplay.appendChild(playersScoreDisplay_holder);
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
        console.log("you are the winner")
    }

    if(computerScore > humanScore){
        console.log("The computer wins")
    } 
}

function playTheGame(e){

    const playerChoice = e.currentTarget.innerText;
    const computerChoice = getComputerChoice();
    progressDisplay(playerChoice,computerChoice);

    if (humanScore < 5 && computerScore < 5){
        playRound(playerChoice, computerChoice)
    } else {
        console.log('FINISH: human:' + humanScore + ' computer: ' + computerScore)
        pickTheWinner()
    };
  
}



function initiateGame() {

    const choices = Array.from(document.querySelectorAll('.choices'));
    choices.forEach(function(choice){return choice.addEventListener('click', playTheGame)})

        
}
 

// Global variable need to be accessible in all functions
var computerScore = 0;
var humanScore = 0;

const content = document.querySelector('body');

// default page display
let contentDisplay = document.createElement('div');
let scoreTitle = document.createElement('h1');
scoreTitle.textContent = 'Scores:';
// update plage display to DOM 
content.appendChild(contentDisplay)
contentDisplay.appendChild(scoreTitle)

// start playing the game
initiateGame()


