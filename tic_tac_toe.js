
let cube1 = document.getElementById('1');
let cube2 = document.getElementById('2');
let cube3 = document.getElementById('3');
let cube4 = document.getElementById('4');
let cube5 = document.getElementById('5');
let cube6 = document.getElementById('6');
let cube7 = document.getElementById('7');
let cube8 = document.getElementById('8');
let cube9 = document.getElementById('9');
let message = document.getElementById('message');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

// cubes array and  players
let cubeArr = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9];
let playersArr = [];

function insertPlayers() {
    playersArr.push(player1.value);
    playersArr.push(player2.value);
}

// simbols
let simbol = ['X', '0'];

// count the clicks and adding simbol
let count = 0;

let game = function() {
    for(let x of cubeArr) {
        x.addEventListener('click', function() {
            if(count%2 === 0) {
                x.innerHTML = simbol[0];
                x.style.fontSize = '150px';
                x.style.textAlign = 'center';
                count++;
            } else {
                x.innerHTML = simbol[1];
                x.style.fontSize = '150px';
                x.style.textAlign = 'center';
                count++;
            }
        }, {once: true})
    };
};

game();


let win = function() {
    // X is the winner
    if(cube1.innerHTML === 'X' && cube2.innerHTML === 'X' && cube3.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube4.innerHTML === 'X' && cube5.innerHTML === 'X' && cube6.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube7.innerHTML === 'X' && cube8.innerHTML === 'X' && cube9.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube1.innerHTML === 'X' && cube4.innerHTML === 'X' && cube7.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube2.innerHTML === 'X' && cube5.innerHTML === 'X' && cube8.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube3.innerHTML === 'X' && cube6.innerHTML === 'X' && cube9.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube1.innerHTML === 'X' && cube5.innerHTML === 'X' && cube9.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }
    if(cube3.innerHTML === 'X' && cube5.innerHTML === 'X' && cube7.innerHTML === 'X') {
        message.innerHTML = `${playersArr[0]} is the winner ! Game over !`;
    }

    // 0 is the winner
    if(cube1.innerHTML === '0' && cube2.innerHTML === '0' && cube3.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube4.innerHTML === '0' && cube5.innerHTML === '0' && cube6.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube7.innerHTML === '0' && cube8.innerHTML === '0' && cube9.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube1.innerHTML === '0' && cube4.innerHTML === '0' && cube7.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube2.innerHTML === '0' && cube5.innerHTML === '0' && cube8.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube3.innerHTML === '0' && cube6.innerHTML === '0' && cube9.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube1.innerHTML === '0' && cube5.innerHTML === '0' && cube9.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
    if(cube3.innerHTML === '0' && cube5.innerHTML === '0' && cube7.innerHTML === '0') {
        message.innerHTML = `${playersArr[1]} is the winner ! Game over !`;
    }
}

setInterval(win, 100);

// Restart game
let restart = function() {
    location.reload();
    playersArr = [];
}











   










