

function Question(question,choices,answer){
    this.question = question;
    this.choices = choices;
    this.answer = answer;

}

//Question Prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}


//Quiz Const
function Quiz(questions){
      this.questions = questions;
      this.score = 0;
      this.questionIndex = 0;
}

//Quiz Prototype
Quiz.prototype.getQuestion= function(){
    return this.questions[this.questionIndex];
}

//Quiz İsFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}


// Quiz Guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question("Türkiye'nin başkenti neresidir?",["Adana","Ankara","Erzurum","İstanbul"],"Ankara");
var q2 = new Question("Nesne tabanlı programlama dillerinden hangisi mobilde en çok tercih edilir?",["C#","C++","Javascript","Java"],"Java");
var q3 = new Question("Gözlenebilir evrenin en büyük dağının adı nedir?",["Zeus","Andromeda","Anoximenes","OlympusMoon"],"OlympusMoon");
var q4 = new Question("Mustafa Kemal Atatürk kaç yılında doğmuştur?",["1886","1923","1876","1881"],"1881");

var questions = [q1,q2,q3,q4];


//Start Quiz

var quiz = new Quiz(questions);

console.log(quiz);
console.log(quiz.getQuestion());
console.log(quiz.isFinish());
loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }
    else
    {
        var getQ = quiz.getQuestion();
        var choices = getQ.choices;
        document.querySelector('#questiontext').textContent = getQ.question;
      
        for(let i=0;i<choices.length;i++){
            var choice =  document.querySelector("#choice"+i);
            choice.textContent = choices[i];
            
            guess('btn'+i,choices[i]);
          
            showProgress();
                
        }
    }
}
function guess(id,guess){

var btn = document.getElementById(id);
btn.onclick = function(){
    quiz.guess(guess);
    loadQuestion();
}

}

function showScore(){
    var html = `<h2>Score<h2><h2>${quiz.score}<h2>`;
    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){

    var totalQuestion = quiz.questions.length;
    var questioNumber = quiz.questionIndex;

    document.querySelector('.card-footer')
    .textContent = `${questioNumber+1}/${totalQuestion}`;

}
    

