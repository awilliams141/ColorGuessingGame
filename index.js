const btn1 = document.getElementById("btn-color-1");
const btn2 = document.getElementById("btn-color-2");
const btn3 = document.getElementById("btn-color-3");
const btn4 = document.getElementById("btn-color-4");
const btn5 = document.getElementById("btn-color-5");
const btn6 = document.getElementById("btn-color-6");
const chosenColor = document.getElementById("chosen-color-div");

function changeColor() {

    const btns = [btn1, btn2, btn3, btn4, btn5, btn6];
    const colors = [];

    //set each of th buttons to a random color
    for (let i = 0; i < btns.length; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btns[i].style.background = `#${randomColor}`;
        colors.push(btns[i].style.background);
    }

    chosenColor.innerHTML = (colors[Math.floor(Math.random() * colors.length)]);
}

function selectColor(btn) {
    if (chosenColor.innerHTML === btn.target.id) {
        chosenColor.innerHTML("<p>Winning!!!</p>");
    }
}

