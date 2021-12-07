var theQuestions = [
    {
        id: 1,
        question: "Which of the following is NOT an HTML tag",
        answers: ["<p>", "<h1>", "<body>", "<c1>"],
        correctAnswer: "<c1>"
    },
    {
        id: 2,
        question: "HTML was originally designed by who?",
        answers: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "That one guy from facebook"],
        correctAnswer: "Tim Berners-Lee"
    },
    {
        id: 3,
        question: "Why is the <alt> attribute so important to the <img> tag?",
        answers: ["In case the image path is broken", "Slow network prevents image from loading", "Users with visual impairments can still enjoy the webpage", "All the above"],
        correctAnswer: "All the above"
    },
    {
        id: 4,
        question: "Currently, which version of HTML do we use?",
        answers: ["HTML6", "HTML5", "HTML99.99", "HTML68"],
        correctAnswer: "HTML5"
    },
    {
        id: 5,
        question: "Meta information could be described as?",
        answers: ["Facebook's ability to see what you are thinking", "Information shown by the web browser", "Information about the web page", "A useful component of JavaScrip"],
        correctAnswer: "Information about the webpage"
    },
    {
        id: 6,
        question: "CSS is used to do what?",
        answers: ["Provide the structure of a webpage", "Make a webpage interactive", "Change how a webpage looks", "Almost nothing, it is practically useless"],
        correctAnswer: "Change how a webpage looks"
    },
    {
        id: 7,
        question: "Is JavaScript the same thing as Java",
        answers: ["No", "Related, but not the same", "Yes, Jave is simply shorthand for JavaScript", "Different versions of the same thing, like coke and pepsi"],
        correctAnswer: "No"
    },
    {
        id: 8,
        question: "What is JavaScript used for?",
        answers: ["Script for brewing coffee", "Making websites interactive", "Adding style to webpages", "Providing the structure for webpages"],
        correctAnswer: "Making websites interactive"
    },
    {
        id: 9,
        question: "Which of the following is not considered one the three core technologies of the world wide web?",
        answers: ["JavaScript", "CSS", "HTML", "Twitter"],
        correctAnswer: "Twitter"
    },
    {
        id: 10,
        question: "Bootstrap was designed by who?",
        answers: ["Facebook", "Twitter", "Instagram", "None of the above"],
        correctAnswer: "Twitter"
    },
]
let usedQuestions = theQuestions.question;
var startingPoints = 0
var questions;
var questionIndex = 0
var buttonEl = document.querySelector('#begin-quiz');
var answersEl = document.getElementById('answers');
var firstPageEl = document.getElementById('opening')

var showQuestions = function(){
    firstPageEl.remove();
    //var questionEl= theQuestions[question];
    //question = JSON.stringify(question)
    var divQuestion = document.getElementById("questions");
    divQuestion.innerHTML = usedQuestions
    for(var i=0; i < theQuestions.length; i++){}
}
var theResults = function(){

}


buttonEl.addEventListener("click", showQuestions);