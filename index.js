const user = document.querySelectorAll('.user');
let GameResult = document.querySelector('#GameResult')
let computerResult = document.querySelector('#computerResult')
let userResult = document.querySelector('#userResult')
GameResult.textContent =  `You lose! paper beats .`
computerResult.textContent = `Computer chose:`
userResult.textContent = `You chose:`
user.forEach((ele) => {
    ele.addEventListener('click',function(e){
        let playerSelection = e.target.id.toLowerCase()
        let computerSelection = computerplayer()
        let finalResult = matchResult(playerSelection,computerSelection)
        GameResult.textContent =  finalResult
        userResult.textContent = `You Choose: ${playerSelection}`
        computerResult.textContent = `Computer chose: ${computerSelection}`;
    })
})


const computerplayer = () => {
    const computerSelection = ['rock','paper','scissors'];
    const RandomSelection = Math.floor(Math.random()*computerSelection.length);
    return computerSelection[RandomSelection]
}



let Userscore = 0;
let computerScore = 0;
const matchResult = (playerSelection,computerSelection) => {


    if (Userscore > computerScore) {
        console.log('user is agye');
    }else{
        console.log(false);
    }

    if (playerSelection === computerSelection) {
        
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    )
     {
        Userscore++
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
     else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    

}

