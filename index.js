
/* create a timed Quiz with multiple choice quesitons and a link to high score storage availability. Will have the ability to calculate the number
 of quesitons answered correctly and store the score in the high scores area. 

/* on start screen, user will see navbar with link to high scores in the top left and a timer counting down from 1 minute in the right
center screen: welcome: introduction to the quiz, directions/parameters and a start button*/

// on click of the start button, the button in the welcome section will disapear 

function startquiz (){};

const startBtnEl= document.getElementById("gitLit").addEventListener("click", function(){
    const vanishConEl=document.getElementById("welcome-instructions");
       vanishConEl.setAttribute("class", "container d-none");
       console.log(startBtnEl)
    
    
       
       let x = document.createElement("p")
       let t = document.createTextNode("How tall is the average female giraffe?")
          x.append(t); 
       let answerBtns= document.createElement("BUTTON")
        answerBtns.innerHTML="5 ft";
        document.body.append(answerBtns);  
        document.getElementById("q-and-a").append(x, answerBtns ); 
    
    
        // arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
    
    
      
    
});



startquiz();

/*let i = 1;
let body = document.getElementsByTagName("body")[0];

for (i; i <= 4; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'Button '+i;
  body.appendChild(button);
  button.addEventListener ("click", function() {
    alert(this.innerHTML);
  });
}*/




/*function questAppear(){
    const question1= document.createElementTextNode("What's the Question?");
    document.body.append(question1);
    console.log(question1)}*/
    
   


// and the quesions will appear. Answers to be inside buttons underneath the question*/

// on click of correct button: display "Correct!" beneath the question and next question will appear

// on click of incorrect button: display "Wrong!" beneath the question and next question will appear

// last screen will show "All Done!" with winner score underneath and an input box for user to enter name: a submit button : a clear score button. 













































// disapear on start game
//append getting things on the html
/*$("#gitLit").on("click",function (){
    console.log('you got clicked')
    $("#intro").addClass("disapear")
    console.log("questions", questions)
    
    $('#gitLit').addClass('questionZone')
    const questionZone = ['#sleepy', '#grumpy','#happy', '#bashful' ]
    console.log (questionZone)
    
    const title= $("<h1>")
    title.text(questions[0].title)
    $(".questionZone").append(title)

    

});

    $('#sleepy').html('8ft')
    $('#grumpy').html('9 ft');
    $('#happy').html('10 ft');
    $('#bashful').html('20 ft');

    
    
    for (let i=0; i<questions[0].choices.length;i++){
        console.log("looping?", questions[0].choices[i] )
       
    
        const button=$("<button>")
        button.attr("class", "choice")
        button.text(questions[0].choices[i])
        $(".questionZone").append(button)
       
    }
        

const questions=[
    {
        title:"How tall is a giraffe?",
        choices:["8 ft", "9 ft", "10 ft", "20 ft" ],
        answer:2
       
        

    }
    
]

questions.forEach(function(value, index){
        console.log(value, index)    
})


$(document).on("click",".choice",function(){
    console.log($(button))
    $("#first").text(choices)
    console.log("click") 
    

    
}) */



