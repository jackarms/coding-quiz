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

var questionIndex = 0
var buttonEl = document.querySelector('#begin-quiz');
var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers');
var answerOl = document.getElementById('answer-list');
var firstPageEl = document.getElementById('opening');

var showQuestions = function() {
    firstPageEl.remove();

    questionsAndAnswers.forEach((q, index, arr) => {
        questionsEl.innerText = arr[questionIndex].question;
        });
    // we need to empty what was there before

    // we need to display questions DONE

    // we need to create h1 element then append it to document
}

var showAnswers = function() {

}


var rightOrWrong = function() {

}

buttonEl.addEventListener("click", showQuestions);