// Questions stored in array
const questions = [
    {
        question: "Which is not a resource from Bedwars?",
        options: [
            {text: "Diamond", correct: false},
            {text: "Gold", correct: false},
            {text: "Emerald", correct: false},
            {text: "Copper", correct: true},
        ]
    },
    {
        question: "What do diamonds do in Bedwars?",
        options: [
            {text: "Upgrade items", correct: true},
            {text: "Make goods cheaper", correct: false},
            {text: "Trade with other resources", correct: false},
            {text: "Diamonds are not a resource in Bedwars", correct: false},
        ]
    },
    {
        question: "What is not an essential skill in Bedwars?",
        options: [
            {text: "PVP combat", correct: false},
            {text: "Bridging", correct: false},
            {text: "Defending", correct: false},
            {text: "Farming", correct: true},
        ]
    },
    {
        question: "What is the best strategy to win?",
        options: [
            {text: "Defense over offense", correct: false},
            {text: "Offense over defense", correct: false},
            {text: "Buy a range of items", correct: false},
            {text: "It depends", correct: true},
        ]
    },
];

//Adding tracker to track the index and score

let currentIndex = 0;
let score = 0;

//Setting up elements that will appear in html

var buttonNext = document.getElementById("next-btn");
const answerOptions = document.getElementById("answer-options");
var arrayQuestion = document.getElementById("question");
const progressBar = document.getElementById("progress-bar");  





// Where the quiz starts and triggers the other functions
function quizStart() {
    chosen=false;
    buttonNext.innerHTML = "Next";
    score = 0;
    currentIndex = 0;
    displayQuestion();
    ProgressBar();
    buttonNext.addEventListener("click", nextButton);
    buttonNext.removeEventListener("click", quizStart);
}

// This function will determine which question to display currently.
function displayQuestion() {
    restartState();

    
    const currentQuestion = questions[currentIndex];
    arrayQuestion.innerHTML = (currentIndex + 1) + ". " + currentQuestion.question;
    currentQuestion.options.forEach(answer => {
        var button = document.createElement("button");
        button.classList.add("btn-bedwar-quiz");
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
        answerOptions.appendChild(button);
        button.addEventListener("click", chosenAnswer);
    });
    ProgressBar();  
}

// his function clears out the previous answer options for the next answer options.
function restartState() {
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }

}

// Where the score will be added
function chosenAnswer(i) {
    chosen = true;
    var chosenBtn = i.target;
    var right = chosenBtn.dataset.correct === "true";
    if (right) {
        score++;
        chosenBtn.classList.add("right");
    } else {
        chosenBtn.classList.add("wrong");
        Array.from(answerOptions.children).forEach(button => {
            if (button.dataset.correct == "true"){
                button.classList.add("right");
            }
        });
    }
    Array.from(answerOptions.children).forEach(button => {
        button.removeEventListener("click", chosenAnswer);
    });



}


//  This function acts a role to advance as well as to end the quiz.
function nextButton() {
    if(chosen==false){alert('Please select an answer'); return;}
        chosen=false;

    if (currentIndex + 1 >= questions.length) {
        displayScore();
    } else {
        currentIndex++;
        displayQuestion();
    }
}




// Where the score will be displayed
function displayScore() {
    restartState();
    arrayQuestion.innerHTML = displayFeedback() + `<br>You scored ${score} out of ${questions.length}!`;
    buttonNext.removeEventListener("click", nextButton);
    buttonNext.addEventListener("click", quizStart);
    buttonNext.style.display = "block";
    buttonNext.innerHTML = "Try Again";


}

quizStart();

// Telling users feedback based on their scores
function displayFeedback() {
    if (score < 1) {
        return "You need more practice!";
    } else if (score === 1) {
        return "Good try! But you could practice more!";
    } else if (score === 2) {
        return "Good job! That was a good try!";
    } else if (score === 3) {
        return "Fantastic! You got most of the questions right!";
    } else if (score === questions.length) {
        return "Perfect! You got all the questions right!";
    } else {
        return "Great work! You almost had them all!";
    }
}

function ProgressBar() {
    const progressPercent = ((currentIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";
}



// It coherent menu throughout the pages
function openSidebar () {
    document.getElementById("content_sidebar").style.width = "250''px";
    document.getElementById("content_sidebar").style.left = "0";
    document.getElementsByClassName("container-bedwar-quiz").style.marginLeft = "300px";
    
}

function closeSidebar () {
    document.getElementById("content_sidebar").style.width = '0';
    document.getElementById("content_sidebar").style.left = '-250px';
    document.getElementsByClassName("container-bedwar-quiz").style.marginLeft = "100px";
}