let userseq = [];
let gameseq = [];

let started = false;
let level = 0;
let highscore = 0;

let btns = ["box1", "box2", "box3", "box4"];

let h3 = document.querySelector("h3");
let startbtn = document.querySelector("button");

startbtn.addEventListener("click", function() {
    if(started == false) {
        console.log("Game is Started");
        started = true;

        levelup();
    }
});

// document.addEventListener("keypress", function() {
//     if(started == false) {
//         console.log("Game is Started");
//         started = true;

//         levelup();
//     }
// });

function levelup() {

    userseq =[];

    level++;
    h3.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randbox = btns[randidx];
    let randbtn = document.querySelector(`.${randbox}`);

    gameseq.push(randbox);
    console.log(gameseq);

    gameflash(randbtn);
}

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 100);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function btnpress() {

    let box = this;
    userflash(box);

    usercolor = box.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbox = document.querySelectorAll(".box");
for (box of allbox) {
    box.addEventListener("click", btnpress);
}

function checkans(idx) {

    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {

            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `Game Over ! your score is : ${level} <br> press start key to restart the game .`;
        document.querySelector("body").style.background = "red";
        setTimeout(function()  {
            document.querySelector("body").style.background = "black"; 
        }, 500);
           resetgame();
    }
}

function resetgame() {
    userseq = [];
    started = false;
    level = 0;
    gameseq = [];
    highscore = highscore;
}




