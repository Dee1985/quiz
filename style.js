// disapear on start game
//append getting things on the html
$("#gitLit").on("click",function (){
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
       
    
       /* const button=$("<button>")
        button.attr("class", "choice")
        button.text(questions[0].choices[i])
        $(".questionZone").append(button)*/ 
       
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
    

    
}) 



