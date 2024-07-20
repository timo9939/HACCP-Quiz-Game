

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
let currentQuestionNumberDisplay=document.getElementById("currentQuestionNumberDisplay")

const correctIncorrect=document.getElementById("correctIncorrect")
const next_btn= document.getElementById('next-btn')


// Showing the question and answer choices
function showQuestion(questionSource){
currentQuestionNumberDisplay.innerText=currentQuestionIndex+1
questionDisplay.innerHTML=questionSource.question

answerChoices.innerText=""

questionSource.choices.forEach(element => {
    const answerButton=document.createElement('button')
   answerButton.textContent=element.text
   answerButton.classList.add("btn-style")
   answerChoices.appendChild(answerButton)
   answerButton.setAttribute("data-correct",element.correct)
   answerButton.addEventListener("click",()=>checkAnswer(element.correct,answerButton))
    
   })
   
}

function checkAnswer(selectedAns,selectedBtn){
    
    if(selectedAns){
        console.log("answer button clicked",selectedAns)
        selectedBtn.classList.add("correct")
        correctIncorrect.innerText="Correct"
    }
    else{
        selectedBtn.classList.add('wrong')
        correctIncorrect.innerText="Incorrect Answer"
    }
Array.from(answerChoices.children).forEach(btn=>btn.disabled=true)
next_btn.addEventListener("click",nextBtnClick)
}
function nextBtnClick(){
    console.log("Next Button Clikced")
    currentQuestionIndex++
    console.log(`currentQuestionIndex is ${currentQuestionIndex}`)
    showQuestion(questions[currentQuestionIndex])
}
showQuestion(questions[currentQuestionIndex])