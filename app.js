const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
    console.log('clicked')
    let rolls = [roll(6), roll(6)]
    console.log(rolls)

    if(rolls[0] === rolls[1]){
        output.innerHTML = `Its a Draw!`
    } else if(rolls[0] > rolls[1]){
        output.innerHTML = `Player 1 Wins`
    } else {
        output.innerHTML = `Player 2 Wins`
    }

    player1.innerHTML = `${rolls[0]}`
    player2.innerHTML = `${rolls[1]}`

});

function roll(num){
    let returnNumber = Math.floor(Math.random() * num) + 1
    return returnNumber
}