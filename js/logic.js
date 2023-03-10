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
    timerRemaining ="20"// need to update the timing
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

/*/////////looping through all questions - this is disabled
for (let j = 0; j < questions.length; j++){
   
        function populateQuestionDiv(event){
            for( let i=0; i<questions[j].ques.length; i++) {
                
                questionTitleDiv.textContent = (questions[j].title);
                questionTitleDiv.style.fontSize="30px";
                let buttonQ = document.createElement("button");
                buttonQ.textContent = (questions[j].ques[i]);
                choicesDiv.appendChild(buttonQ);  
                };
               
            let allButtons = document.querySelectorAll("button");

            function userChoice (){allButtons.forEach(buttonQQ => {
                    buttonQQ.addEventListener("click", (e) => { //index of clicked button into indexB
                        let indexB = Array.from(allButtons).indexOf(e.target);
                        
                            
                        if (indexB===questions[j].correctIndex ){ //if correct answer = turn green
                            buttonQQ.style.backgroundColor="green";
                                console.log("matching");
                                wrongAnsw.classList.add("hide");
                                rightAnsw.classList.remove("hide");
                                return 
                                
                        } else {
                            buttonQQ.style.backgroundColor="red";
                            console.log("wrong choice");
                            rightAnsw.classList.add("hide");
                            wrongAnsw.classList.remove("hide");
                            return ;
                        };
                    });
            })};
            userChoice();
            ;
        };
};

 populateQuestionDiv();       
*/
 
startQuiz();
 
/////single question populating
   
function populateQuestionDiv(question){
        for( let i=0; i<questions[0].ques.length; i++) {
            
            questionTitleDiv.textContent = (questions[0].title);
            questionTitleDiv.style.fontSize = "30px";
            let buttonQ = document.createElement("button");
            buttonQ.textContent = (questions[0].ques[i]);
            
            choicesDiv.appendChild(buttonQ);  
            };
            
        let allButtons = document.querySelectorAll("button");

        function userChoice (){allButtons.forEach(buttonQ => {
                buttonQ.addEventListener("click", (e) => {
                     //index of clicked button goes into indexB
                        let indexB = Array.from(allButtons).indexOf(e.target);
                    
                        if (indexB!==questions[0].correctIndex ){ 
                            //if wrong answer answer = turn red
                            buttonQ.style.backgroundColor = "red";                            
                            rightAnsw.classList.add("hide");
                            wrongAnsw.classList.remove("hide"); 
                            timerRemaining=timerRemaining-5; //penalty for wrong answer
                            
                        } else {
                            //if correct answer...
                            buttonQ.style.backgroundColor = "green";                        
                            wrongAnsw.classList.add("hide");
                            rightAnsw.classList.remove("hide");                        
                            score = timerRemaining;
                            clearInterval(countdown());                        
                            unhideScreen();
                            emptyquestionScreen();                        
                            localStorage.setItem("score",(score))
                            timerEl.classList.add("hide");
                            finalScore.textContent = score;
                            
                        };
                    
                }); 
        })};
        userChoice();
};


populateQuestionDiv(); 

let unhideScreen = function(){
        endScreen.classList.remove("hide");
};

finalScore.textContent = score;

submitBut.addEventListener("click", function(e) {
    
     iniInput = iniInput.value;
      localStorage.setItem("initials",(iniInput));
});


 /* ////To note////
 let choicesArray = Object.values(choices);
 choicesArray.forEach((i) => console.log(i));
 console.log( choices)
/*
//turns into arrays
*/