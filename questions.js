let timerEl = document.querySelector("#time"); 
let scores = document.querySelector("#scores");
let startButton= document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsDiv = document.querySelector ("#questions");
let questionsTitle = document.querySelector ("#question-title");
let questionChoices= document.querySelector ("#choices");

let qTag =document.createElement("p");
let longLine =document.createElement("p");
let listOrd1 =document.createElement("ol");
let listOrd2 =document.createElement("ol");
let listOrd3 =document.createElement("ol");
let listOrd4 =document.createElement("ol");
let listOrd5 =document.createElement("ol");
let arrOfLists = {listOrd1,listOrd2,listOrd3, listOrd4, listOrd5};


//attributes of the questions
qTag.setAttribute("style", " margin-left:20%; font-weight: bold; font-size:30px; ");

listOrd1.setAttribute("style","font-weight: normal; font-size:15px;" );
listOrd2.setAttribute("style","font-weight: normal; font-size:15px;" );
listOrd3.setAttribute("style","font-weight: normal; font-size:15px;" );
listOrd4.setAttribute("style","font-weight: normal; font-size:15px;" );
listOrd5.setAttribute("style","font-weight: normal; font-size:15px;" );



//first question
let li1Q1 = document.createElement("li");
let li1Q2 = document.createElement("li");
let li1Q3 = document.createElement("li");
let li1Q4 = document.createElement("li");

li1Q1.textContent="list item 1";console.log(li1Q1);
li1Q2.textContent="list item 2";
li1Q3.textContent="list item 33333333333333333333";
li1Q4.textContent="list item 4";

listOrd1.appendChild(li1Q1);
listOrd1.appendChild(li1Q2);
listOrd1.appendChild(li1Q3);
listOrd1.appendChild(li1Q4);

//second question
let li2Q1 = document.createElement("li");
let li2Q2 = document.createElement("li");
let li2Q3 = document.createElement("li");
let li2Q4 = document.createElement("li");

li2Q1.textContent="list item 1b";
li2Q2.textContent="list item 2b";
li2Q3.textContent="list item 3b";
li2Q4.textContent="list item 4b";

listOrd2.appendChild(li2Q1);
listOrd2.appendChild(li2Q2);
listOrd2.appendChild(li2Q3);
listOrd2.appendChild(li2Q4);

//third question
let li3Q1 = document.createElement("li");
let li3Q2 = document.createElement("li");
let li3Q3 = document.createElement("li");
let li3Q4 = document.createElement("li");

li3Q1.textContent="list item 1b";
li3Q2.textContent="list item 2b";
li3Q3.textContent="list item 3b";
li3Q4.textContent="list item 4b";

listOrd3.appendChild(li3Q1);
listOrd3.appendChild(li3Q2);
listOrd3.appendChild(li3Q3);
listOrd3.appendChild(li3Q4);

//fourth question
let li4Q1 = document.createElement("li");
let li4Q2 = document.createElement("li");
let li4Q3 = document.createElement("li");
let li4Q4 = document.createElement("li");

li4Q1.textContent="list item 1b";
li4Q2.textContent="list item 2b";
li4Q3.textContent="list item 3b";
li4Q4.textContent="list item 4b";

listOrd4.appendChild(li4Q1);
listOrd4.appendChild(li4Q2);
listOrd4.appendChild(li4Q3);
listOrd4.appendChild(li4Q4);

//fifth question
let li5Q1 = document.createElement("li");
let li5Q2 = document.createElement("li");
let li5Q3 = document.createElement("li");
let li5Q4 = document.createElement("li");

li5Q1.textContent="list item 1b";
li5Q2.textContent="list item 2b";
li5Q3.textContent="list item 3b";
li5Q4.textContent="list item 4b";

listOrd5.appendChild(li5Q1);
listOrd5.appendChild(li5Q2);
listOrd5.appendChild(li5Q3);
listOrd5.appendChild(li5Q4);