// setting up variables


console.log(listOrd1)

//timerRemaining ="10"; //need to raise to 60

//function to run countdown
function countdown(){
    timerRemaining ="10"// here or line6
     let timeCountdownFun = setInterval(function(){
        timerRemaining--;
        timerEl.textContent = timerRemaining;

        if(timerRemaining === 0) {
            clearInterval(timeCountdownFun);
            timerEl.textContent="out of time"; //what happens here
        }
       },1000) ;
}
//run function
countdown();

function enterQuestionnaire() {
    startButton.addEventListener("click", function(event){
        startScreen.classList.add("hide") //hiding after event
    
        //adding first question
        qTag.textContent = "Commonly used data types DO NOT include:";
        questionsDiv.textContent = "";

        questionsDiv.appendChild(qTag);
        qTag.appendChild(listOrd1);
        questionsDiv.appendChild(longLine);
        
        longLine.classList.add("line"); //longLine.classList.add("line","hide"
        li1Q1.classList.add("button","hover");
    
        
});  
}
enterQuestionnaire();


li1Q1.addEventListener("click", function(event){
    questionChoices.textContent= 1;
    console.log( questionChoices);
    
})




