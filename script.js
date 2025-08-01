const boxes = document.querySelectorAll('.box');
const resetButton = document.getElementById('reset-btn');
const winMsg = document.getElementById('winMsg');

let turn_O = true;

let winArray = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log(`Box ${index + 1} clicked`);
        if (box.innerText === '') {
            if (turn_O) {
                box.innerText = 'O';
                box.style.color = '#34d399';
                turn_O = false;
            }
            else {
                box.innerText = 'X';
                box.style.color = '#f87171';
                turn_O = true;
            }
        }
        box.disabled = 'true';
        checkWin();
    });
});


function checkWin() {
    for (let win_pattern of winArray) {
        let a = win_pattern[0];
        let b = win_pattern[1];
        let c = win_pattern[2];
        console.log(boxes[a]);
        let pos1 = boxes[a].innerText;
        let pos2 = boxes[b].innerText;
        let pos3 = boxes[c].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                declareWinner(a, b, c);
                boxes.forEach(box => {
                    box.disabled = true;
                })

            }
        }

    }
}

function declareWinner(a, b, c) {
    boxes[a].style.color = '#2f0d68';
    boxes[b].style.color = '#2f0d68';
    boxes[c].style.color = '#2f0d68';

    boxes[a].style.backgroundColor = '#c6d2ff';
    boxes[b].style.backgroundColor = '#c6d2ff';
    boxes[c].style.backgroundColor = '#c6d2ff';

    if (boxes[a].innerText === 'O') {
        winMsg.innerText = 'Player 1 Wins !';
    }

    else {
        winMsg.innerText = 'Player 2 Wins !';
    }
    winMsg.style.display = 'block';


}



function resetGame() {
    boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '#dff2fe';
        box.disabled = false;
    });
    winMsg.style.display = 'none';
    turn_O = true;
}

resetButton.addEventListener('click', resetGame);