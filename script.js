const button=document.getElementsByClassName('btn-style');
console.log("js worked")

// Check whther the answer is correct
const ButtonArray=Array.from(button)
ButtonArray.forEach(btn => {
   
    btn.addEventListener("click",function(){

        if(this.getAttribute('data-correct')==='true'){
this.classList.add('correct')
// btn.classList.add('no-hover-correct')
        }
        else{
            this.classList.add('wrong')
            btn.classList.add('no-hover-correct')
        }

       Array.from(button).forEach(btn=>{
        btn.disabled=true
        btn.classList.add('no-hover')
        
       })
    })
});