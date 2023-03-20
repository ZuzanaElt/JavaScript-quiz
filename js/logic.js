let timerEl = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#start-screen");
let questionTitleDiv = document.querySelector("#question-title");
let choicesDiv = document.querySelector(".choices");
let questionsDiv = document.getElementById("questions");
let endScreen = document.querySelector("#end-screen");
let rightAnsw = document.createElement("p");
let wrongAnsw = document.createElement("p");
let longLine = document.createElement("p");
let submitBut = document.getElementById("submit");
let iniInput = document.getElementById("initials");
let timerRemaining;
let timerCount;
var score;
let finalScore = document.getElementById("final-score")
let allButtons = document.querySelectorAll("button");

longLine.textContent = "__________________________________________________";
rightAnsw.textContent = "Correct!";
wrongAnsw.textContent = "Wrong! Try Again.";
rightAnsw.classList.add("hide");
wrongAnsw.classList.add("hide");
choicesDiv.appendChild(longLine);
choicesDiv.appendChild(wrongAnsw);
choicesDiv.appendChild(rightAnsw);



function emptyquestionScreen(){
     questionTitleDiv.textContent = "";
     choices.textContent = "";
};

function countdown(){
    timerRemaining ="40"// need to update the timing
        let timeCountdownVar = setInterval(function(){
            timerRemaining--;
            timerEl.textContent = timerRemaining;

            if(timerRemaining === 0) {
                clearInterval(timeCountdownVar);
                timerEl.textContent="You are out of time"; //what happens here
                timerEl.style.color = "red"
                
            }
       },1000
       ) ;
};

//countdown(); //can be input into startQuiz function

function startQuiz () {
    startButton.addEventListener("click", function(event){
        startScreen.className = "hide";
        questionsDiv.setAttribute("class","");
        rightAnsw.classList.add("hide");
        wrongAnsw.classList.add("hide");
        countdown();
    });  
};

function populateDIV (number){
    for( let i=0; i<questions[number].ques.length; i++) {
            
        questionTitleDiv.textContent = (questions[number].title);
        questionTitleDiv.style.fontSize = "30px";
        let buttonQ = document.createElement("button");
        buttonQ.textContent = (questions[number].ques[i]);
        choicesDiv.appendChild(buttonQ);  
        };
        allButtons = document.querySelectorAll("button");
}
function correctAnswer(buttonQ){
    buttonQ.style.backgroundColor = "green";                        
    wrongAnsw.classList.add("hide");
    rightAnsw.classList.remove("hide");                        
    score = timerRemaining;
    emptyquestionScreen();                        
    localStorage.setItem("score",(score))
    finalScore.textContent = score;
}
function wrongAnswer(buttonQ){
    buttonQ.style.backgroundColor = "red";                            
    rightAnsw.classList.add("hide");
    wrongAnsw.classList.remove("hide"); 
    timerRemaining=timerRemaining-5; //penalty for wrong answer
}
function unhideScreen (){
        endScreen.classList.remove("hide");
};
 
let populateQuestion5 = (number) => {
    populateDIV(4);
    let userChoice =  () => {
        allButtons.forEach(buttonQ => {
            buttonQ.addEventListener("click", (event) => {
                let indexB = Array.from(allButtons).indexOf(event.target);

                if (indexB!==questions[number].correctIndex ){ 
                    wrongAnswer(buttonQ);
                } else {
                    correctAnswer(buttonQ);
                    clearInterval(countdown());                        
                    unhideScreen(); //unhide the score screen
                    timerEl.classList.add("hide");
                };
            }); 
    })};
userChoice(); 
}

let populateQuestion4 = (number) => {
    populateDIV(3);    
    let userChoice = () =>{
        allButtons.forEach(buttonQ => {
            buttonQ.addEventListener("click", (event) => {
                    let indexB = Array.from(allButtons).indexOf(event.target);
                    if (indexB!==questions[number].correctIndex ){ 
                        wrongAnswer(buttonQ);  
                    } else {
                        correctAnswer(buttonQ);
                        populateQuestion5(4)
                        };
                            
                    }); 
            })};
            userChoice(); 
}
let populateQuestion3 = (number) => {
        populateDIV(2);
        let userChoice = () => {
            allButtons.forEach(buttonQ => {
                buttonQ.addEventListener("click", (event) => {
                    let indexB = Array.from(allButtons).indexOf(event.target);
                    if (indexB!==questions[number].correctIndex ){ 
                        wrongAnswer(buttonQ);
                    } else {
                        correctAnswer(buttonQ);
                        
                        populateQuestion4(3)
                        };
                    }); 
                })};
                userChoice();
}
let populateQuestion2 = (number) => {
    populateDIV(1);   
    let userChoice = function (){
        allButtons.forEach(buttonQ => {
            buttonQ.addEventListener("click", (event) => {
                
                let indexB = Array.from(allButtons).indexOf(event.target);
                if (indexB!==questions[number].correctIndex ){ 
                    wrongAnswer(buttonQ);
                } else {
                    correctAnswer(buttonQ);
                    
                    populateQuestion3(2);
                };
                }); 
            })};
        userChoice();
}
let startPopoulatingQuestions =(number) => {
    populateDIV(0);
    let userChoice = function (){allButtons.forEach(buttonQ => {
        buttonQ.addEventListener("click", (event) => {
            //index of clicked button goes into indexB
            let indexB = Array.from(allButtons).indexOf(event.target);
            if (indexB!==questions[number].correctIndex ){ 
                //if wrong answer answer = turn red
                wrongAnswer(buttonQ);
            } else {
                //if correct answer...
                correctAnswer(buttonQ);                   
                populateQuestion2(1);
                };
                        
        }); 
        })};
        userChoice();
}; 

startQuiz();
startPopoulatingQuestions(0); 

finalScore.textContent = score;

submitBut.addEventListener("click", function(e) {
      iniInput = iniInput.value;
      localStorage.setItem("initials",(iniInput));
});


 