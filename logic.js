let timerEl = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#start-screen");
let questionTitleDiv = document.querySelector("#question-title");
let choicesDiv = document.querySelector(".choices");
let questionsDiv = document.querySelector("#questions")

function emptyScreen (){
    let emptyScreen = startScreen.textContent = "";
};

function countdown(){
    timerRemaining ="10"// need to update the timing
        let timeCountdownFun = setInterval(function(){
            timerRemaining--;
            timerEl.textContent = timerRemaining;

            if(timerRemaining === 0) {
                clearInterval(timeCountdownFun);
                timerEl.textContent="out of time"; //what happens here
            }
       },1000
       ) ;
};
countdown(); //can be input into startQuiz function



function startQuiz () {
    startButton.addEventListener("click", function(event){
       startScreen.className="hide";
       questionsDiv.setAttribute("class","")
        
    });  
};
startQuiz();




/*create 
a loop function that will

- if userIndex = correctIndex then display "correct" else display "wrong" and calculate timerRemaining-5
*/

//populating question 1
for( let i=0; i<4; i++) {
    questionTitleDiv.textContent = (questions[0].title);
    
    let qTag = document.createElement("button");
    choicesDiv.appendChild(qTag);
    qTag.setAttribute("class", "button ");
    qTag.textContent = (questions[0].ques[i]);
    questionTitleDiv.style.fontSize="30px";
}

/*
//turns into arrays
let guestionsArray = Object.values(questions);
guestionsArray.forEach((i) => console.log(i));*/