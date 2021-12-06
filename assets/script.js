var theQuestions = [
    {
        id: 1,
        question: "Which of the following is NOT an HTML tag",
        answers: {
            a: "<p>",
            b: "<h1>",
            c: "<body>",
            d: "<c1>",
        },
        correctAnswer: "d"
    },
    {
        id: 2,
        question: "HTML was originally designed by who?",
        answers: {
            a: "Tim Berners-Lee",
            b: "Bill Gates",
            c: "Steve Jobs",
            d: "That one guy from facebook",
        },
        correctAnswer: "a"
    },
    {
        id: 3,
        question: "Why is the <alt> attribute so important to the <img> tag?",
        answers: {
            a: "In case the image path is broken",
            b: "Slow network prevents image from loading",
            c: "Users with visual impairments can still enjoy the webpage",
            d: "All the above",
        },
        correctAnswer: "d"
    },
    {
        id: 4,
        question: "Currently, which version of HTML do we use?",
        answers: {
            a: "HTML6",
            b: "HTML5",
            c: "HTML99.99",
            d: "HTML68",
        },
        correctAnswer: "b"
    },
    {
        id: 5,
        question: "Meta information could be described as?",
        answers: {
            a: "Facebook's ability to see what you are thinking",
            b: "Information shown by the web browser",
            c: "Information about the web page",
            d: "A useful component of JavaScript",
        },
        correctAnswer: "c"
    },
    {
        id: 6,
        question: "CSS is used to do what?",
        answers: {
            a: "Provide the structure of a webpage",
            b: "Make a webpage interactive",
            c: "Change how a webpage looks",
            d: "Almost nothing, it is practically useless"
        },
        correctAnswer: "c"
    },
    {
        id: 7,
        question: "Is JavaScript the same thing as Java",
        answers: {
            a: "No",
            b: "Related, but not the same",
            c: "Yes, Java is simply shorthand for JavaScript",
            d: "Different versions of the same thing, like coke and pepsi",
        },
        correctAnswer: "a"
    },
    {
        id: 8,
        question: "What is JavaScript used for?",
        answers: {
            a: "Script for brewing coffee",
            b: "Making websites interactive",
            c: "Adding style to webpages",
            d: "Providing the structure for webpages",
        },
        correctAnswer: "b"
    },
    {
        id: 9,
        question: "Which of the following is not considered one the three core technologies of the world wide web?",
        answers: {
            a: "JavaScript",
            b: "CSS",
            c: "HTML",
            d: "Twitter",
        },
        correctAnswer: "d"
    },
    {
        id: 10,
        question: "Bootstrap was designed by who?",
        answers: {
            a: "Facebook",
            b: "Twitter",
            c: "Instagram",
            d: "None of the above",
        },
        correctAnswer: "b"
    },
]
var startingPoints = 0

var buttonEl = document.querySelector('#begin-quiz');
var questionEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var firstPageEl = document.getElementById('opening')

var showQuestions = function(){
    firstPageEl.remove();
    for(var i=0; i < theQuestions.length; i++){
        theQuestions[i].question = questionsEl;
        theQuestions[i].answers = answerEl;
        questionEl.appendChild(questionsEl)
        }
    }
var theResults = function(){

}


buttonEl.addEventListener("click", showQuestions);