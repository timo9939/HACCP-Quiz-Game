


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
    },
    {
        question:"Which one belongs to establish critical limits?",
        choices:[
            {text:"Storing the oyster below 8°C",correct:true},
            {text:"Establish corrective actions",correct:false},
            {text:"Establish monitoring procedures",correct:false},
            {text:"Carry internal audit",correct:false}
        ]
    },
    {
        question:"Humidity Check of the cheese is an exemple of?",
        choices:[
            {text:"Corrective action",correct:false},
            {text:"Establish control limits",correct:false},
            {text:"Monitoring Procedures",correct:true},
            {text:"Conduct a hazard analysis",correct:false}
        ]
    },
    {
        question:"Which one is an example of prereqisite programme?",
        choices:[
            {text:"Making decision tree diagram",correct:false},
            {text:"Establish control limits",correct:false},
            {text:"Employee food safety training",correct:true},
            {text:"Keeping record of audit details",correct:false}
        ]

    }

]

let currentQuestionIndex=0;
let score=0;

const questionDisplay=document.getElementById('question')
const answerChoices=document.getElementById("choices")
let currentQuestionNumberDisplay=document.getElementById("currentQuestionNumberDisplay")
const question_No_Header=document.getElementById("question_No_Header")

const correctIncorrect=document.getElementById("correctIncorrect")
const next_btn= document.getElementById('next-btn')
const scoreDisplay=document.getElementById("score-display")
const scoreDisplayScore=document.getElementById("score")

// Showing the question and answer choices
function showQuestion(questionSource){
currentQuestionNumberDisplay.innerText=currentQuestionIndex+1

correctIncorrect.innerHTML=""
questionDisplay.innerHTML=questionSource.question
answerChoices.innerText=""

next_btn.classList.remove('nextBtn-style-on')
next_btn.classList.add('nextBtn-style-off')

questionSource.choices.forEach(element => {
    const answerButton=document.createElement('button')
   answerButton.textContent=element.text
   answerButton.classList.add("btn-style")
   answerChoices.appendChild(answerButton)
   answerButton.setAttribute("data-correct",element.correct)
   answerButton.addEventListener("click",()=>checkAnswer(element.correct,answerButton))
    
   })
   
}

// Check whether answer is correct or not and display correct or incorrect
function checkAnswer(selectedAns,selectedBtn){
   
next_btn.classList.remove('nextBtn-style-off')
next_btn.classList.add('nextBtn-style-on')
    if(selectedAns){
        console.log("answer button clicked",selectedAns)
        selectedBtn.classList.add("correct")
        correctIncorrect.innerText="Correct"
        score++
    }
    else{
        selectedBtn.classList.add('wrong')
        correctIncorrect.innerText="Incorrect Answer"
    }
Array.from(answerChoices.children).forEach(btn=>btn.disabled=true)
next_btn.addEventListener("click",nextBtnClick)
}
function nextBtnClick(){
    if(currentQuestionIndex<4){
    console.log("Next Button Clikced")
    currentQuestionIndex++
    console.log(`currentQuestionIndex is ${currentQuestionIndex}`)
    showQuestion(questions[currentQuestionIndex])
}

else{
    showScore()
}

}
showQuestion(questions[currentQuestionIndex])

function showScore(){
    correctIncorrect.innerHTML=""
questionDisplay.innerHTML=""
answerChoices.innerText=""
currentQuestionNumberDisplay=""
question_No_Header.innerText=""
console.log(`Score is ${score}`)

next_btn.classList.remove('nextBtn-style-on')
next_btn.classList.add('nextBtn-style-off')
scoreDisplay.classList.remove('score-display-off')
scoreDisplay.classList.add('score-display-on')
scoreDisplayScore.innerText=score

}