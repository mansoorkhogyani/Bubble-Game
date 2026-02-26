let timer = 60;
let score = 0;
let hitrn =0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 168; i++) {
        let rnum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rnum}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer(){
    let timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <h1>,</h1> <h1>scores are ${score}</h1>`;
        }
    },1000)
}

function newHits(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        newHits();
    }
})

setTimer();
makeBubble();
newHits();
