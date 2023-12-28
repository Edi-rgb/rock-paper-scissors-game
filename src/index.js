import hiddenMenu from "../utils/hiddenMenu.js"
import verifyInput from "../utils/veirfyInput.js"
import playingMusic from "../utils/music.js"
import showMenu from "../utils/showMenu.js"
import Choices from "../utils/game.js"


window.addEventListener('DOMContentLoaded', (event) => {

const startBtn = document.getElementById("startBtn")
const input = document.getElementById("inputName")

input.addEventListener('input', verifyInput)

startBtn.addEventListener('click', (event) => {

    event.preventDefault()

    hiddenMenu()

    const template = document.getElementById('firstTemplate');

    const templateContent = template.content.cloneNode(true);

    const container = document.getElementById("container");
    container.appendChild(templateContent);

    const menuBtn = document.createElement("button");
    const newContent = document.createTextNode("Menu"); 
    menuBtn.appendChild(newContent);

    const footerMenu = document.getElementById("containerMiniMenu"); 
    footerMenu.appendChild(menuBtn); 
    menuBtn.className = "menuBtn"

    const gameStatus = document.getElementById("gameStatus")
    gameStatus.hidden = false

    menuBtn.addEventListener("click", showMenu)

    let realPlayerName = document.getElementById("realPlayer")

    realPlayerName.innerText = input.value

    Choices()

})

const musicBtn = document.getElementById("musicBtn")

musicBtn.addEventListener('click', playingMusic)


})

