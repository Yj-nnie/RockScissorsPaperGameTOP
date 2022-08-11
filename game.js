function getComputerChoice(){

    let optionList=["rock", "scissors", "paper"]
    var randomKey = Math.floor(Math.random() * (optionList.length));
    var choice = optionList[randomKey]
    return choice;
}

function playRound(playerChoice, computerChoice){
    
    let optionList=["rock", "scissors", "paper"];
    let result = "";
    let scores = 0; // 0 means draw, 1 means lose, 2 means human wins,3 means its invalid

    if(optionList.includes(playerChoice.toLowerCase())){
        
        if(playerChoice.toLowerCase() === "rock"){
            
            if(computerChoice === "paper"){
                result = "You loose, paper beats rock!";
                scores = 1;

            } 
            if(computerChoice === "scissors"){
                result="You win, rock beats scissors";
                scores = 2;
            }
            if(computerChoice === "rock"){ result="draw";}
            
        }

        if(playerChoice.toLowerCase() === "paper"){
            
            if(computerChoice === "scissors"){
                result = "You loose, scissors beats paper!";
                scores = 1;
            } 
            if(computerChoice === "rock"){
                result = "You win, paper beats rock!";
                scores = 2;
            }
            if(computerChoice === "paper"){ result="draw";}
        }

        if(playerChoice.toLowerCase() === "scissors"){
            
            if(computerChoice === "rock"){
                result="You loose, rock beats scissors!";
                scores = 1;
            } 
            if(computerChoice === "paper"){
                result="You win, scissors beats paper!";
                scores = 2;
            }
            if(computerChoice === "scissors"){result="draw";}
            
        }
    } else {
    
        result="enter your choice of the right format";
        scores = 3; 
    }
    console.log("computer chooses:" + computerChoice)
    console.log("you choose:" + playerChoice)
    console.log(result);
    return scores;

}

function game() {

    var computerScore = 0;
    var humanScore = 0;

    for(let i = 0; i< 5; i++) {

        console.log("Round " + parseInt(i+1));

        const playerSelection = prompt("please enter your choice here" )
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

    }

    if(humanScore > computerScore){
        console.log("you win")
    }

    if(computerScore > humanScore){
        console.log("you loose")
    }

}

game();
