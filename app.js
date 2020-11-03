const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const output = document.querySelector('#output');
const player1score = document.querySelector('#player1score');
const player2score = document.querySelector('#player2score');

let score1 = 0;
let score2 = 0;


button.addEventListener('click', () => {
    console.log('clicked')
    let rolls = [roll(6), roll(6)]

    if(rolls[0] === rolls[1]){
        output.innerHTML = `Its a Draw!`
    } else if(rolls[0] > rolls[1]){
        output.innerHTML = `Player 1 Wins`;
        score1++
        player1score.innerHTML = `Player 1 = ${score1}`
    } else {
        output.innerHTML = `Player 2 Wins`
        score2++
        player2score.innerHTML = `Plater 2 = ${score2}`
    }

    player1.innerHTML = `${rolls[0]}`
    player2.innerHTML = `${rolls[1]}`

});

// RETURN HTML UNICODE 
function roll(num){
    let returnNumber = Math.floor(Math.random() * num) + 1;
    let unicode = `&#${returnNumber + 9855};`
    return `${returnNumber} ${unicode}`
}