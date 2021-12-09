var quizQuestionsAndAnswers = {
        question: ["Which of the following is NOT an HTML tag", "HTML was originally designed by who?", "Why is the <alt> attribute so important to the <img> tag?", "Currently, which version of HTML do we use?", "Meta information could be described as?", "CSS is used to do what?", "Is JavaScript the same thing as Java",
        "What is JavaScript used for?", "Which of the following is not considered one the three core technologies of the world wide web?", "Bootstrap was designed by who?"],
        answers: [["p", "h1", "body", "c1"], ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "That one guy from facebook"], ["In case the image path is broken", "Slow network prevents image from loading", "Users with visual impairments can still enjoy the webpage", "All the above"],
        ["HTML6", "HTML5", "HTML99.99", "HTML68"], ["Facebook's ability to see what you are thinking", "Information shown by the web browser", "Information about the web page", "A useful component of JavaScrip"],
        ["Provide the structure of a webpage", "Make a webpage interactive", "Change how a webpage looks", "Almost nothing, it is practically useless"], ["No", "Related, but not the same", "Yes, Jave is simply shorthand for JavaScript", "Different versions of the same thing, like coke and pepsi"],
        ["Script for brewing coffee", "Making websites interactive", "Adding style to webpages", "Providing the structure for webpages"], ["JavaScript", "CSS", "HTML", "Twitter"], ["Facebook", "Twitter", "Instagram", "None of the above"]],
        correctAnswer: ["c1", "Tim Berners-Lee", "All the above", "HTML5", "Information about the webpage", "Change how a webpage looks", "No", "Making websites interactive", "Twitter", "Twitter"]
}

var questionIndex = 0
var theQuestions = quizQuestionsAndAnswers.question;
console.log(theQuestions[0])
var theAnswers = quizQuestionsAndAnswers.answers;
var buttonEl = document.querySelector('#begin-quiz');
var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers');
var answerOl = document.getElementById('answer-list');
var firstPageEl = document.getElementById('opening');
var showQuestions = function(){
    firstPageEl.remove();
    for(let i = 0; i <theQuestions.length; i++){
        let h1 = document.createElement('h1');
        h1.textContent = theQuestions[i];
        questionsEl.appendChild(h1);
    }
}
var theResults = function(){

}


buttonEl.addEventListener("click", showQuestions);