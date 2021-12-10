var questionsAndAnswers = [
    {
        question: "Which of the following is NOT an HTML tag",
        answers: ["p", "h1", "body", "c1"],
        correctAnswer: "c1",
    },
    {
        question: "HTML was originally designed by who?",
        answers: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "That one guy from facebook"],
        correctAnswer: "Tim Berners-Lee",
    },
    {
        question: "Why is the <alt> attribute so important to the <img> tag?",
        answers: ["In case the image path is broken", "Slow network prevents image from loading", "Users with visual impairments can still enjoy the webpage", "All the above"],
        correctAnswer: "All the above",
    },
    {
        question: "Which of the following is NOT an HTML tag",
        answers: ["p", "h1", "body", "c1"],
        correctAnswer: "c1",
    },
    {
        question: "HTML was originally designed by who?",
        answers: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "That one guy from facebook"],
        correctAnswer: "Tim Berners-Lee",
    },
    {
        question: "Why is the <alt> attribute so important to the <img> tag?",
        answers: ["In case the image path is broken", "Slow network prevents image from loading", "Users with visual impairments can still enjoy the webpage", "All the above"],
        correctAnswer: "All the above",
    },
    {
        question: "Which of the following is NOT an HTML tag",
        answers: ["p", "h1", "body", "c1"],
        correctAnswer: "c1",
    },
    {
        question: "HTML was originally designed by who?",
        answers: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "That one guy from facebook"],
        correctAnswer: "Tim Berners-Lee",
    },
    {
        question: "Why is the <alt> attribute so important to the <img> tag?",
        answers: ["In case the image path is broken", "Slow network prevents image from loading", "Users with visual impairments can still enjoy the webpage", "All the above"],
        correctAnswer: "All the above",
    },
    {
        question: "Which of the following is NOT an HTML tag",
        answers: ["p", "h1", "body", "c1"],
        correctAnswer: "c1",
    }
]

var theCorrectAnswer = questionsAndAnswers.map(x => x.correctAnswer)
console.log(theCorrectAnswer)
var theCorrectAnswerString = theCorrectAnswer.toString();
console.log(theCorrectAnswerString)
let questionIndex = 0
let answerIndex = 0
let theAnswers;
var buttonBegin = document.querySelector('#begin-quiz');
var questionsEl = document.getElementById('questions')
var answersDiv = document.getElementById('answers');
var answerOl = document.getElementById('answer-list');
var firstPageEl = document.getElementById('opening');

var showQuestions = function() {
    firstPageEl.remove();

    questionsAndAnswers.forEach((q, index, arr) => {
        questionsEl.innerText = arr[questionIndex].question;
        if(radioEl.onclick()) {
            questionIndex++
        }
        });
}

var showAnswers = function() {
    questionsAndAnswers[answerIndex].answers.forEach(answer => {
         
       let theAnswers = answer;
       console.log(theAnswers)
       let ulEl = document.createElement('ul');
       let liEl = document.createElement('li');
       let radioEl = document.createElement('INPUT');
       radioEl.setAttribute('type', 'radio')
       radioEl.setAttribute('id', 'radio');
       radioEl.setAttribute('value', 'name');
       radioEl.setAttribute('name', 'radioName');
       radioEl.setAttribute('onclick', 'theClick()');
       let lblEl = document.createElement('label')
       lblEl.appendChild(document.createTextNode(theAnswers));
       liEl.appendChild(lblEl);
       liEl.appendChild(radioEl);
       ulEl.appendChild(liEl);
       answersDiv.appendChild(ulEl);
       
    radioEl.onclick = function () {
        
        if (document.getElementById('radio').checked ==true){
            console.log("true");
            questionIndex++
            answerIndex++
        } else {
            console.log("false");
        }
    }
    })
}




buttonBegin.addEventListener("click", showQuestions);
buttonBegin.addEventListener("click", showAnswers);