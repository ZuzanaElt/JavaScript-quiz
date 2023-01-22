let timerEl = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let startScreen = document.querySelector("#start-screen");
let questionTitleDiv = document.querySelector("#question-title");
let choicesDiv = document.querySelector(".choices");
let questionsDiv = document.getElementById("questions");

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

 
function populQue(){
    for( let i=0; i<4; i++) {
        questionTitleDiv.textContent = (questions[0].title);
        questionTitleDiv.style.fontSize="30px";
        let buttonQ = document.createElement("button");
        buttonQ.textContent = (questions[0].ques[i])+(i+1);
        choicesDiv.appendChild(buttonQ);
        buttonQ.className += ("index"+i)
        buttonQ.addEventListener("click",function(){
            alert.innerHtML=i
            console.log(choices)

            


        });
}}
populQue()
//populatingQuesAndChoosing();

 /*
 let choicesArray = Object.values(choices);
 choicesArray.forEach((i) => console.log(i));
 console.log( choices)
/*
//turns into arrays
*/
let choicesArray = Object.values(choices);
            choicesArray.forEach((i) => console.log(i));
            console.log( )

function populQue(){
    for( let i=0; i<4; i++) {
        questionTitleDiv.textContent = (questions[0].title);
        questionTitleDiv.style.fontSize="30px";
        let buttonQ = document.createElement("button");
        buttonQ.textContent = (questions[0].ques[i])+(i+1);
        choicesDiv.appendChild(buttonQ);
        
        //finding index of each button
        const allButtons =document.querySelectorAll("button");
        allButtons.forEach(butTon => {
            butTon.addEventListener("click", (e) => {
                const indexB = Array.from(allButtons).indexOf(e.target);
                console.log(indexB);
            })
        })

       
    }}