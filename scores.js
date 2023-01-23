let resultLine = document.querySelector (".highscores-result");
resultLine.textContent = ((localStorage.getItem("initials"))+ " - "+" Your score is " )

let clearBtn = document.getElementById("clear");
//clearBtn= clearBtn.style.backgroundColor="black";




clearBtn.addEventListener("click", function(e) {
    
    resultLine.classList.add("hide");
    localStorage.setItem("initials","")//removes value from local storage
});


