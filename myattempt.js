function initGame() {
    const buttonEl = document.getElementById("gitLit");
    buttonEl.setAttribute("class", "btn btn-primary btn-lg");
    const container = document.getElementById('intro');
    console.log(buttonEl, container)
    const questionZone = document.getElementById('boxes');
    questionZone.style.visibility = "hidden";
    console.log(questionZone)
    
    
    
function startGame() {
  container.style.visibility= "hidden";
  questionZone.style.display= "block";
 
  const title= $("<h1>")
  title.text(questions[0].title)
  $(".questionZone").append(title)
  
  const questions = [
    {
      title:"How tall is a giraffe?",
      choices: ["5 ft", "8 ft", "10 ft", "15 ft"],
      answer:2 
    }
]

console.log(choices)
choices.forEach(function(value, index){
    console.log(value, index);
    btn1.addEventListener("click", userPick);
    btn2.addEventListener("click", userPick);
    btn3.addEventListener("click", userPick);
    btn4.addEventListener("click", userPick);
    
    function userPick(){
        console.log(this);
    } 
    
    
})
  
  
  
  choices.forEach(function(value, index){
    const choices = ["5 ft", "9 ft", "10 ft", "15ft" ];
    console.log(choices)
    console.log(value, index);
  })
}


    

   
   
   /* btn1.addEventListener("click", userPick);
    btn2.addEventListener("click", userPick);
    btn3.addEventListener("click", userPick);
    btn4.addEventListener("click", userPick);
    
    function userPick(){
        console.log(this);
    } */
    
    


buttonEl.addEventListener("click", startGame);
  }
  
initGame();








