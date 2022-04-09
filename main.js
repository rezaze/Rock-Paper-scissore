const showText = document.querySelector("h3");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnSciss = document.getElementById("sciss");
const btnStart = document.getElementById("showGuess");
const showComGuess = document.querySelector("h4");
const winNum = document.querySelector("footer")
const clientPic = document.getElementById("clientpic");
const comPic = document.getElementById("compic");

const chArr = ["Rock", "Paper", "Scissore"];

let clientSeletor = "";
let clientWin = 0;
let comWin = 0;

////// function for get client selector and get picture with set Attribute +(remove hid class)

const selectRock = () => {
    clientSeletor = chArr[0];
    showText.innerHTML = "You Select : " + clientSeletor;
    clientPic.setAttribute("src", "images/rock.webp");
    clientPic.classList.remove("hid");
}

const selectPaper = () => {
    clientSeletor = chArr[1];
    showText.innerHTML = "You Select : " + clientSeletor;
    clientPic.setAttribute("src", "images/paper.jpg");
    clientPic.classList.remove("hid");
}

const selectSciss = () => {
    clientSeletor = chArr[2];
    showText.innerHTML = "You Select : " + clientSeletor;
    clientPic.setAttribute("src", "images/scissor.jpg");
    clientPic.classList.remove("hid");
}



const selsectComGuess = () => {
    let res = Math.floor(Math.random() * chArr.length);
    let randGame = chArr[res];
    showComGuess.innerHTML = "Comunter Select : " + randGame;
    if (randGame == chArr[0]) {
        comPic.setAttribute("src", "/images/rock.webp");
        comPic.classList.remove("hid");
        if (clientSeletor == chArr[1]) {
            clientWin += 1;
        } else {
            if (clientSeletor == chArr[2]) {
                comWin += 1;
            }
        }
    }
    if (randGame == chArr[1]) {
        comPic.setAttribute("src", "images/paper.jpg");
        comPic.classList.remove("hid")
        if (clientSeletor == chArr[0]) {
            comWin += 1;
        } else {
            if (clientSeletor == chArr[2]) {
                clientWin += 1;
            }
        }
    }
    if (randGame == chArr[2]) {
        comPic.setAttribute("src", "/images/scissor.jpg");
        comPic.classList.remove("hid");
        if (clientSeletor == chArr[0]) {
            clientWin += 1;
        } else {
            if (clientSeletor == chArr[1]) {
                comWin += 1;
            }
        }
    }
    winNum.innerHTML = "Client Win : " + clientWin + "<br>" + "Compunter Win : " + comWin;

}