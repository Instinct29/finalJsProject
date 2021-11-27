//Challenge - 1
var clickMeButton = document.querySelector(".btn-primary");
var resultt = document.querySelector(".result");
var resetButton = document.querySelector(".btn-danger");
resetButton.addEventListener('click', () => {
    document.getElementById('1').innerText = "";
})
clickMeButton.addEventListener('click', () => {
    var birthYear = prompt("what year you born in friend?")
    var age = 2021 - birthYear;
    var ageInDays = age * 365;
    resultt.innerText = ageInDays;

})

//Challenge-2 
var catGenerate = document.querySelector("#cat-generator")
var imgOutput = document.querySelector(".flex-box-container-2")
catGenerate.addEventListener('click', () => {
    var image = document.createElement('img');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    imgOutput.appendChild(image);

})

//Challenge-3
function rpsGame(yourChoice) {
    // console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = getBotChoice();
    //    console.log('humanChoice is ',humanChoice)
    //    console.log('botChoice is ',botChoice)
    var results = decideWinner(humanChoice, botChoice) //[0,1] human lost | bot won 
    //    console.log(results);
    message = finalMessage(results) //{"message" :"You lost","color": 'Green'}
    //    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}

function getBotChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][randomNumber];
}

function decideWinner(yourChoice, computerChoice) {

    var rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'you lost',
            'color': 'red'
        }
    } else if (yourScore === 0.5) {
        return {
            'message': 'you tied',
            'color': 'yellow'
        }
    } else {
        return {
            'message': 'you won',
            'color': 'green'
        }

    }
}



function rpsFrontEnd(humanImageChoice, computerImageChoice, finalmessagee) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // Removing all the images from flex-box after choosing human choice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    // Creating the divisions for after images and messages
    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src = ' " + imageDataBase[humanImageChoice] + " ' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    messageDiv.innerHTML = "<h1 style ='color:" + finalmessagee["color"] + "; font-size:60px;padding:30px;'>" + finalmessagee['message'] + "</h1"


    botDiv.innerHTML = "<img src = '  " + imageDataBase[computerImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge-4

var allbtns = document.getElementsByClassName("btn")
var copyAllBtns = []
for (let i = 0; i < allbtns.length; i++) {
    copyAllBtns.push(allbtns[i].classList[1]);

}
// console.log(allbtns)
// console.log(copyAllBtns);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === "red") {
        buttonRed();
    } else if (buttonThingy.value === "green") {
        buttonGreen();
    } else if (buttonThingy.value === "reset") {
        buttonReset();
    } else if (buttonThingy.value === "random") {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < allbtns.length; i++) {
        allbtns[i].classList.remove(allbtns[i].classList[1]);
        allbtns[i].classList.add('btn-danger')
    }
}

function buttonGreen() {
    for (let i = 0; i < allbtns.length; i++) {
        allbtns[i].classList.remove(allbtns[i].classList[1]);
        allbtns[i].classList.add('btn-success')
    }
}

function buttonReset() {
    for (let i = 0; i < allbtns.length; i++) {
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add(copyAllBtns[i]);
    }
}

function buttonRandom() {
    for (let i = 0; i < allbtns.length; i++) {
        var randomCol = ["btn-primary", "btn-success", "btn-warning"]
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add(randomCol[Math.floor(Math.random() * 3)])
    }


}

//challenge-5


let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        'div': "#your-box",
        'score': 0
    },
    'dealer': {
        'scoreSpan': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0
    },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardMap': {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'K': 10,
        'J': 10,
        'Q': 10,
        'A': [1, 11]
    },
    'WINS': 0,
    'lOSSES': 0,
    'DRAWS': 0,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const audio = new Audio('Blackjackassets/sounds/swish.m4a');
const winAudio = new Audio('blackjackassets/sounds/cash.mp3')
const lossAudio = new Audio('blackjackassets/sounds/aww.mp3')

function getRandomCard() {

    return blackjackGame['cards'][Math.floor(Math.random() * 13)];
}

// HIT BUTTON => shows card
document.querySelector('#blackjack-hit-button').addEventListener('click', () => {
    let card = getRandomCard();
    console.log(card);
    showCard(card, YOU);

    updateScore(card, YOU)
    // console.log(YOU['score']); 
    showScore(YOU);


})

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `Blackjackassets/cards/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        audio.play();
    }
}

// DEAL BUTTON REMOVES THE CARDS
document.querySelector('#blackjack-deal-button').addEventListener('click', () => {
    blackjackDeal();
    

})

function blackjackDeal() {
    
    let imagez = document.querySelector('#your-box').querySelectorAll("img");
    let imagezz = document.querySelector('#dealer-box').querySelectorAll("img");
    //    console.log(imagez); =>gives you an array   of images
    for (let i = 0; i < imagez.length; i++) {
        imagez[i].remove();
        for (let i = 0; i < imagezz.length; i++) {
            imagezz[i].remove();
        }
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = 'white';
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").style.color = 'white';
    // document.querySelector('#blackjack-result').textContent = "Let's Play";
    // document.querySelector('#blackjack-result').style.color = 'black';

}



function updateScore(card, activePlayer) {
    //Taking care of ace here - like -> which value to use  1 or 11 
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardMap'][card];
    }


}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'RED'

    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

//STAND BUTTON
document.querySelector('#blackjack-stand-button').addEventListener('click', () => {
    let card = getRandomCard();
    console.log(card);
    showCard(card, DEALER);

    updateScore(card, DEALER)

    showScore(DEALER);
    if(DEALER['score'] > 15){
        computeWinner();
        showResult(computeWinner());
    }


})

//computeWinner function which gives/returns who actually won
function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        // condition where your score is higher than dealer and the dealer busts
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['WINS'] = blackjackGame['WINS'] + 1;
            winner = YOU;
            //condition when dealer score is greater than that of yours
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['LOSSES'] = blackjackGame['LOSSES'] +1;
            winner = DEALER;
            //condition when both have equal score without busting
        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['DRAWS'] = blackjackGame['DRAWS'] + 1;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['LOSSES'] = blackjackGame['LOSSES'] +1;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
          //condition when both busts
          blackjackGame['DRAWS'] = blackjackGame['DRAWS'] + 1;
    }
    console.log(blackjackGame);
    
    return winner;
}

function showResult(winner){
    let message , messageColor;
    if(winner === YOU){
       // document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You Won✨🤑'
        messageColor = "green"
        winAudio.play();
    } else if(winner === DEALER){
       // document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You Lost😔'
        messageColor = "red"
        lossAudio.play();
    } else{
       // document.querySelector('#draws').textContent = blackjackGame['draws'];
        message = ' You drew!'
        messageColor = 'black'
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}





















































//link http://thecatapi.com/api/images/get?format=src&type=gif&size=small
//var rockImg = document.querySelector("#rock");
// var paperImg = document.querySelector("#paper");
// var scissorImg = document.querySelector("#scissors");
// rockImg.addEventListener('click',()=>{
//     console.log(rockImg);
// })
/**
 * 
    messageDiv.innerHTML = "<h1 style = 'color : " + finalMessage['color'] + "; font-size:60px ; padding: 30px; '>" + finalMessage['message'] + "</h1>"


    botDiv.innerHTML = "<img src = '  " +imageDataBase[computerImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";

    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);



 */