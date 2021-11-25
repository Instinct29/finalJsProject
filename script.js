//Challenge - 1
var clickMeButton = document.querySelector(".btn-primary");
var resultt = document.querySelector(".result");
var resetButton = document.querySelector(".btn-secondary");
resetButton.addEventListener('click',()=>{
    document.getElementById('1').innerText="";
})
clickMeButton.addEventListener('click',()=>{
    var birthYear = prompt("what year you born in friend?")
    var age = 2021-birthYear;
    var ageInDays = age*365;
    resultt.innerText = ageInDays;

})

//Challenge-2 
var catGenerate=document.querySelector("#cat-generator")
var imgOutput=document.querySelector(".flex-box-container-2")
catGenerate.addEventListener('click',()=>{
    var image = document.createElement('img');
    image.src =  "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    imgOutput.appendChild(image);

})

//Challenge-3
function rpsGame(yourChoice){
    console.log(yourChoice);
   var humanChoice , botChoice;
   humanChoice = yourChoice.id;
   botChoice = getBotChoice();
   console.log('humanChoice is ',humanChoice)
   console.log('botChoice is ',botChoice)
   var results = decideWinner(humanChoice,botChoice) //[0,1] human lost | bot won 
   console.log(results);
   message = finalMessage(results) //{"message" :"You lost","color": 'Green'}
   console.log(message);
   rpsFrontEnd(humanChoice,botChoice,message);

}
function getBotChoice(){
   var randomNumber = Math.floor(Math.random()*3);
   return ["rock","paper","scissors"][randomNumber];
}
function decideWinner(yourChoice,computerChoice){

    var rpsDatabase = {
        'rock' : {'scissors':1,'rock':0.5,'paper':0},
        'paper' : {'rock':1,'paper':0.5,'scissors':0},
        'scissors' : {'paper':1,'scissors':0.5,'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore , computerScore];

}
function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'you lost' , 'color':'red'}
    }else if(yourScore === 0.5){
        return {'message':'you tied','color':'yellow'}
    }else{
        return {'message':'you won', 'color':'green'}
        
    }
}



function rpsFrontEnd(humanImageChoice,computerImageChoice,finalmessagee){
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    // Removing all the images from flex-box after choosing human choice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
   // Creating the divisions for after images and messages
    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src = ' " +imageDataBase[humanImageChoice] + " ' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    messageDiv.innerHTML = "<h1 style ='color:"+finalmessagee["color"] + "; font-size:60px;padding:30px;'>" + finalmessagee['message']+"</h1"


    botDiv.innerHTML = "<img src = '  " +imageDataBase[computerImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


    
    


    

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








