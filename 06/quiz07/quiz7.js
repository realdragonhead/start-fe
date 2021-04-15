const $box = document.getElementsByClassName('box')[0];
const $bug = document.getElementById('bug');
const $scoreBoard = document.getElementById('point');
const $lifeBoard = document.getElementById('life');
const $boxInfo = { 
    left: $box.getBoundingClientRect().left,
    top: $box.getBoundingClientRect().top,
    right: $box.getBoundingClientRect().right,
    bottom: $box.getBoundingClientRect().bottom,
};
const $boxWidth = $boxInfo.right - $boxInfo.left;
const $boxHeight = $boxInfo.bottom - $boxInfo.top;
let intervalTime = 1200;
let Xorigin = 0, Yorigin = 0;
let life = 10;
let score = 0;

Xorigin = $bug.getBoundingClientRect().left;
Yorigin = $bug.getBoundingClientRect().top;

function bugRefresher() {
    let Xrand = Math.floor(Math.random()*parseInt($boxWidth - 20));
    let Yrand = Math.floor(Math.random()*parseInt($boxHeight - 20));

    $bug.style.left = `${Xrand}px`;
    $bug.style.top = `${Yrand}px`;

    Xorigin = $bug.getBoundingClientRect().left;
    Yorigin = $bug.getBoundingClientRect().top;
    
    console.log(`${Xrand} ${Yrand}`);
}

function clickDetector(event) {
    Xclick = event.clientX;
    Yclick = event.clientY;

    console.log(`Click position : ${Xclick}, ${Yclick}`);

    if (Xorigin - 3 <= Xclick && Xclick <= Xorigin + 23 && Yorigin < Yclick && Yclick - 3 < Yorigin + 23) {
        // process find
        console.log('okay');
        score++;
    } else if(life > 1) {
        console.log('fail');
        life--;
    } else {
        alert('game over');
        $scoreBoard.innerHTML = 0;
        $lifeBoard.innerHTML = 10;
        score = 0;
        life = 10;
        return;
    }

    $scoreBoard.innerHTML = score;
    $lifeBoard.innerHTML = life;
}

play = setInterval(bugRefresher, 1200);
document.addEventListener('click', clickDetector)