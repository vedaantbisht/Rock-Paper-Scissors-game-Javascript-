function getComputerChoice(){
    const choice = ["Rock","Paper","Scissor"];
    const randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}
  console.log(getComputerChoice());
  function getHumanChoice(){
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissor"){
      choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return choice;
  }
  console.log( getHumanChoice());
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice,computerChoice){
    humanChoice.toLowerCase();
    
    if(humanChoice = computerChoice){
      console.log("It's a Tie")
      
    }else if(
       (humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
      ){
        humanChoice++
        console.log(`you WIN! ${humanChoice.charAt(0).toUpperCase() } beats ${computerChoice}.`)
    }else{
      computerChoice++
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() } beats ${humanChoice}.`);
    }
  }
  const humanChoice = getHumanChoice(); // Get the human choice
  const computerChoice = getComputerChoice(); // Get the computer choice
  playRound(humanChoice, computerChoice); // Play a round and log the result