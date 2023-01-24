# JavaScript-quiz

What a tricky assignement!

- set-up of css file and html were already prepared
- the majority of changes are to be done in JS


# Where to find this
the url at github is https://github.com/ZuzanaElt/JavaScript-quiz
url for the page is https://zuzanaelt.github.io/JavaScript-quiz/

## issues and steps
- setting up a step by step process - as this is a bit complicated;
- setting up variables that are related to classes in both htmls as well as the future questions. All of these are placed into questions.js
- logic.js will hopefully stay available for functions and the process

    1. setting up timer interval -this is linked to end of game using local storage
    2. setting up button event that hides the first page and then displayes the first question
    3. the look of the page needs to be amended in JS which can be tricky
    - .setAttribute method
      e.g. -   pTag.setAttribute("style","font-weight: normal; font-size:15px;" );


solution for finding index of added button was found on:
https://stackoverflow.com/questions/67427370/is-there-a-way-to-identify-the-index-of-one-button-among-a-list-of-many-buttons
answered by Invizi (thank you Invizi!!)

!{image of code](assets/index-buttons.png)

  4.populating questions div with questions  proved too difficult.
      I successfully populated the choices div with title and answers for th first question using for loop to input data into newly created list of buttons. 
      I then tried to create an outer for loop that would allow me to do the same for each of the questions. Unfortunatelly I did not manage this. After a long time of trying this, I decided to complete the chanllenge with one question distplayed only.
      When I used the 2 nested for loops, the displayed question was always the last question only. The whole code ran without pausing for button event. I still am not sure how to implement this and I have requested a tutorial to see what was the correct solution.
  5. creating button evenListeners was not too difficult to figure out
  6. I was also struggling with the counter stopping but I managed to find the correct area to place clearInterval() function.

  All in all, this project was challenging. I am happy with what I managed to achieve but too many questions stayed unanswered. The process helped me to navigate through all the different information we learned in past 2 wekeks but I do not feel confident in there use. A lot of used code was done through trials. 

