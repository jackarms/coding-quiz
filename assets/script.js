var allQuestions = [
    {
        question: "Which of the following is NOT an HTML tag",
        answers: {
            a: "<p>",
            b: "<h1>",
            c: "<body>",
            d: "<c1>"
        },
        correctAnswer: "d"
    },
    {
        question: "HTML was originally designed by who?",
        answers: {
            a: "Tim Berners-Lee",
            b: "Bill Gates",
            c: "Steve Jobs",
            d: "That one guy from facebook"
        },
        correctAnswer: "a"
    },
]

var buttonEl = document.querySelector('#begin-quiz');
var firstPageEl = document.getElementById('opening');
var quizContainer = document.getElementById('quiz');

var showQuestions = function(){
    firstPageEl.remove();
    
}
var theResults = function(){

}


buttonEl.addEventListener("click", showQuestions);