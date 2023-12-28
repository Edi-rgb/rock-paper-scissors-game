// ...

function Choices(choices) {
    choices = document.querySelectorAll(".box > button");
    let gameScreenHeader = document.getElementById('gameScreenHeader')

    for (let choice of choices) {

        choice.addEventListener('click', () => {
            document.querySelectorAll("#mainScreen > h1").forEach(el => el.remove());

            console.log(choice.id)

            if (choice.id === 'rock') {
                let h1Rock = document.createElement('h1');
                let newContent = document.createTextNode("🤜");
                h1Rock.className = "PlayerFontSize"
                h1Rock.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Rock);
            } else if (choice.id === 'paper') {
                let h1Paper = document.createElement('h1');
                let newContent = document.createTextNode("✋");
                h1Paper.className = "PlayerFontSize"
                h1Paper.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Paper);
            } else if (choice.id === 'scissors') {
                let h1Scissors = document.createElement('h1');
                let newContent = document.createTextNode("✌️");
                h1Scissors.className = "PlayerFontSize"
                h1Scissors.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Scissors);
            }

            

            gameScreenHeader.hidden = true;
            let botChoices = Array.from(choices).map(choice => choice.id);
            let randomIndex = Math.floor(Math.random() * botChoices.length);
            let randomElement = botChoices[randomIndex];
            console.log(`bot choice is ${randomElement}`);

            if (randomElement === 'rock') {
                let h1Rock = document.createElement('h1');
                let newContent = document.createTextNode("🤛");
                h1Rock.className = "PlayerFontSize"
                h1Rock.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Rock);
            } else if (randomElement === 'paper') {
                let h1Paper = document.createElement('h1');
                let newContent = document.createTextNode("🖐️");
                h1Paper.className = "PlayerFontSize"
                h1Paper.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Paper);
            } else if (randomElement === 'scissors') {
                let h1Scissors = document.createElement('h1');
                let newContent = document.createTextNode("✌️");
                h1Scissors.className = "PlayerFontSize"
                h1Scissors.appendChild(newContent);

                let mainScreen = document.getElementById('mainScreen');
                mainScreen.appendChild(h1Scissors);
            }

            let gameStatus = document.getElementById('gameStatusSpan')

            if (choice.id === randomElement) {
                console.log("It's a tie!");
                gameStatus.innerText = " Tie!"
                gameStatus.style.color = "blue"
               

            } else if (
                (choice.id === 'rock' && randomElement === 'scissors') ||
                (choice.id === 'paper' && randomElement === 'rock') ||
                (choice.id === 'scissors' && randomElement === 'paper')
            ) {
                console.log("You win!");
                gameStatus.innerText = " You Win!"
                gameStatus.style.color = "green"
            } else {
                console.log("You lose!");
                gameStatus.innerText = " You Lose!"
                gameStatus.style.color = "red"
            }
        });
    }
}


export default Choices; 