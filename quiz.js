var readlinesync=require("readline-sync");
var score=0;
var username=readlinesync.question("what is your name: ");
console.log("welcome "+ username+" do you know Govind Agnihotri?");
console.log("let's play the quiz about govind");
//high score 
var highscore=[{
  name:"govind",
  score:6
},
{
  name:"sahil",
  score:4.5
},
{
  name:"paras",
  score:4.5
}]
var user=[{
  name:username,
  score:score
}]
// function
function play(question,answer){
  var useranswer = readlinesync.question(question);

if (  useranswer.toLowerCase() == answer ){
  console.log("right!");
  score=score+1;

}
else{
  console.log("wrong");
  score=score-(1/2);
}
  console.log("score: "+score);
  console.log("------------------------------------")
}
var questions=[{
  question:"where do i live? : ",
  answer:"jaipur"
},
{
  question:"my favourite movie? : ",
  answer:"shershaah"
},
{
  question:"my favourite web series? : ",
  answer:"scam 1992"
},

{question:"my favourite sport? : ",
  answer:"cricket"},

{question:"my favourite book? : ",
  answer:"bhagvat geeta"},

{question:"my favourite country? : ",
  answer:"india"}
]
//loop
for(var i = 0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("your final score "+score+" out of 6");
 console.log("------------------------------------");
 console.log("high scorer of the quiz")
 for( var i=0;i<highscore.length;i++){
   var currenthighscorer=highscore[i];
   console.log(currenthighscorer.name+" = "+currenthighscorer.score)
 }

