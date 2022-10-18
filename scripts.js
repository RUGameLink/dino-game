const hero = document.getElementById("hero");
const cork = document.getElementById("cork");
let score = 0;

function jump() {
    if (hero.classList != "jump") {
        hero.classList.add("jump");

        setTimeout(function () {
            hero.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let corkLeft = parseInt(window.getComputedStyle(cork).getPropertyValue("left"));

    score = score + 0.01;
//    console.log(score);
    console.log(parseInt(score));

    if(corkLeft < 50 && corkLeft > 0 && heroTop >= 140){
        var alertText = `Game Over! Your record is ${parseInt(score)}`
        alert(alertText) ? "" : location.reload();
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});