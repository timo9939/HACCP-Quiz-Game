

const questions=[
    {
        question:"Which one is not the HACCP 7 principles?",
        choices:[
            {text:"Conduct Hazard Analysis",correct:false},
            {text:"Establish Control Points",correct:false},
            {text:"Establish Corrective Action",correct:false},
            {text:"Establish Profit Plan",correct:true}
        ]
    },
    {
        question:"Which measures below is to establish a critical control points?",
        choices:[
            {text:"Cooking a chicken to a specfic temperature",correct:true},
            {text:"Storing Sashimi at room temperature",correct:false},
            {text:"Checking the cost of the thermal processing",correct:false},
            {text:"Making the package looks prettier",correct:false}
        ]
    }
]

let currentQuestionIndex=1;
let score=0;

const questionDisplay=document.getElementById('question')
const answerChoices=document.getElementById("choices")
let currentQuestionNumberDisplay=document.getElementById("currentQuestionNumberDisplay")
currentQuestionNumberDisplay.innerText=currentQuestionIndex

// Showing the question and answer choices
function showQuestion(questionSource){

questionDisplay.innerHTML=questionSource.question

questionSource.choices.forEach(element => {
    const answerButton=document.createElement('button')
   answerButton.textContent=element.text
   answerButton.classList.add("btn-style")
   answerChoices.appendChild(answerButton)
   
})
}


showQuestion(questions[currentQuestionIndex])