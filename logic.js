let timerEl = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#start-screen");
let questionTitleDiv = document.querySelector("#question-title");
let choicesDiv = document.querySelector(".choices");
let questionsDiv = document.getElementById("questions");

let rightAnsw = document.createElement("p");
let wrongAnsw = document.createElement("p");
let longLine = document.createElement("p");
longLine.textContent = "__________________________________________________";
rightAnsw.textContent = "Correct!";
wrongAnsw.textContent = "Wrong!"
rightAnsw.classList.add("hide");
wrongAnsw.classList.add("hide");
choicesDiv.appendChild(longLine);
choicesDiv.appendChild(wrongAnsw);
choicesDiv.appendChild(rightAnsw);


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
//countdown(); //can be input into startQuiz function

function startQuiz () {
    startButton.addEventListener("click", function(event){
       startScreen.className = "hide";
       questionsDiv.setAttribute("class","")
       rightAnsw.classList.add("hide");
       wrongAnsw.classList.add("hide");
       countdown()
    });  
};

/*
for (let j = 0; j < questions.length; j++){
   
        function populateQuestionDiv(){
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
                                return 
                                
                        } else {
                            buttonQQ.style.backgroundColor="red";
                            console.log("wrong choice");
                            return ;
                        };
                    });
            })};
            userChoice();
            return ;
        };
};

 populateQuestionDiv();       
*/
 startQuiz();


 ////////////////////////////////////////////////////////////////////////////////////////////

   
    function populateQuestionDiv(){
        for( let i=0; i<questions[0].ques.length; i++) {
            
            questionTitleDiv.textContent = (questions[0].title);
            questionTitleDiv.style.fontSize="30px";
            let buttonQ = document.createElement("button");
            buttonQ.textContent = (questions[0].ques[i]);
            choicesDiv.appendChild(buttonQ);  
            };
            
        let allButtons = document.querySelectorAll("button");

        function userChoice (){allButtons.forEach(buttonQQ => {
                buttonQQ.addEventListener("click", (e) => { //index of clicked button into indexB
                    let indexB = Array.from(allButtons).indexOf(e.target);
                    
                        
                    if (indexB===questions[0].correctIndex ){ //if correct answer = turn green
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

        return ;
    };


populateQuestionDiv(); 


///////////////////////////////////////////////////////////////////////////////////////////////////
console.log (" correct is "+ questions[0].correctIndex);



 /*
 let choicesArray = Object.values(choices);
 choicesArray.forEach((i) => console.log(i));
 console.log( choices)
/*
//turns into arrays
*/