function getComputerChoice(){

    let optionList=["rock", "scissors", "paper"]
    var randomKey = Math.floor(Math.random() * (optionList.length));
    var choice = optionList[randomKey]
    return choice;
}

function playRound(playerChoice, computerChoice){
    
    let optionList=["rock", "scissors", "paper"];
    let result = "";
    let score_flag = 0; // 0 means draw, 1 means lose, 2 means human wins,3 means its invalid
    const resultDisplay = document.createElement('p');

    if(optionList.includes(playerChoice.toLowerCase())){
        
        if(playerChoice.toLowerCase() === "rock"){
            
            if(computerChoice === "paper"){
                result = "You loose, paper beats rock!";
                score_flag = 1;

            } 
            if(computerChoice === "scissors"){
                result="You win, rock beats scissors";
                score_flag = 2;
            }
            if(computerChoice === "rock"){ result="draw";}
            
        }

        if(playerChoice.toLowerCase() === "paper"){
            
            if(computerChoice === "scissors"){
                result = "You loose, scissors beats paper!";
                score_flag = 1;
            } 
            if(computerChoice === "rock"){
                result = "You win, paper beats rock!";
                score_flag = 2;
            }
            if(computerChoice === "paper"){ result="draw";}
        }

        if(playerChoice.toLowerCase() === "scissors"){
            
            if(computerChoice === "rock"){
                result="You loose, rock beats scissors!";
                score_flag = 1;
            } 
            if(computerChoice === "paper"){
                result="You win, scissors beats paper!";
                score_flag = 2;
            }
            if(computerChoice === "scissors"){result="draw";}
            
        }
    } else {
    
        result="enter your choice of the right format";
        score_flag = 3; 
    }

    // print result - console.log(result);
    resultDisplay.textContent = result; 
    contentDisplay.appendChild(resultDisplay);
    return score_flag;

}



function game() {

    var computerScore = 0;
    var humanScore = 0;

  ///for(let i = 0; i< 5; i++) {

    ///    console.log("Round " + parseInt(i+1));
    

        //const playerSelection = prompt("please enter your choice here" )
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection)

        if(result === 1){
            computerScore ++;
        }   
        if(result === 2){
            humanScore ++;
        }

        if(result === 3){
            i = i - 1;
            console.log("enter your choice:again")
        }

   // }

    if(humanScore > computerScore){
        console.log("you win")
    }

    if(computerScore > humanScore){
        console.log("you loose")
    }

}

function playTheGame(e){
    
    const playerChoice = e.currentTarget.innerText;
    const computerChoice = getComputerChoice();
    
    const gameProgress_C = document.createElement('p');
    const gameProgress_p = document.createElement('p');

    gameProgress_p.textContent =  'You chose: ' + playerChoice;
    contentDisplay.appendChild(gameProgress_p);

    gameProgress_C.textContent = 'Computer chooses: ' + computerChoice;
    contentDisplay.appendChild(gameProgress_C);

    playRound(playerChoice, computerChoice);

}

// 1) capturing all the key class
const choices = Array.from(document.querySelectorAll('.choices')); // or document.querySelectorAll('.choices')
// 2) for each list Item we add an event listener and put it through PlayerChoice
choices.forEach(choice => choice.addEventListener('click', playTheGame))

const content = document.querySelector('body');
// !! here I learnt that contentDisplay CAN be used and refered to in other functions it's Global. 
let contentDisplay = document.createElement('div');
content.appendChild(contentDisplay)

