/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which all methods are used for measuring spot speed of vehicle?",  ///// Write the question inside double quotes
      answers: {
        a: "Graphic recorder",                  ///// Write the option 1 inside double quotes
        b: "Photoelectric meter",                  ///// Write the option 2 inside double quotes
        c: "Radar speed meter",                  ///// Write the option 3 inside double quotes
        d: "All the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: " The equipment must be set up at an angle between the direction of travel of the vehicle and _ _ _ _ _ _ _ _ _ _ from the transmitter receiver.",  ///// Write the question inside double quotes
      answers: {
        a: "Parabolic Shape",                  ///// Write the option 1 inside double quotes
        b: "Tangentially",                  ///// Write the option 2 inside double quotes
        c: "Straight Line",                  ///// Write the option 3 inside double quotes
        d: "None of Above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    
    {
     question: "In order to Minimise possible errors, it is desirable to keep the vertical and horizontal angles to the vehicles _ _ _ _ _ _ _ _ _",  ///// Write the question inside double quotes
      answers: {
        a: "Less than 20 degree",                  ///// Write the option 1 inside double quotes
        b: "180 degree",                  ///// Write the option 2 inside double quotes
        c: "Near about 60 degree",                  ///// Write the option 3 inside double quotes
        d: "None Of Above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
    
    {
     question: "The radar speed meters are capable of measuring speeds of vehicle ranging from _ _ _ _ _ _ _ _",  ///// Write the question inside double quotes
      answers: {
        a: "About 5 KMPH to 300 KMPH",                  ///// Write the option 1 inside double quotes
        b: " About 50 KMPH to 250 KMPH",                  ///// Write the option 2 inside double quotes
        c: " About 30 KMPH to 200 KMPH",                  ///// Write the option 3 inside double quotes
        d: "None Of Above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
    
    {
     question: "Among a pack of vehicles over a patch for a time t, whose speed will the radar be reading _ _ _ _ _",  ///// Write the question inside double quotes
      answers: {
        a: "Average of all the near by vehicles",                  ///// Write the option 1 inside double quotes
        b: "Speed of the closest vehicle",                  ///// Write the option 2 inside double quotes
        c: "Maximum among them",                  ///// Write the option 3 inside double quotes
        d: "None Of Above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
