

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

let currentQuestionIndex=0;
let score=0;

const questionDisplay=document.getElementById('question')
const answerChoices=document.getElementById("choices")

// Showing the question and answer choices
questionDisplay.innerHTML=questions[0].question

questions[0].choices.forEach(element => {
    const answerButton=document.createElement('button')
   answerButton.textContent=element.text
   answerChoices.appendChild(answerButton)
   
});


