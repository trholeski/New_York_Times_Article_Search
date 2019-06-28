
var userSelections = []
var numQuestions = 7;
var answerKey = ["C", "A", "A", "A", "A", "A", "A"]
var correctAnswers = 0;

var submitAnswer = function(numQuestions) {
    for (var i = 1; i < numQuestions + 1; i++) {
        
        var choices = document.getElementsByName('question' + i);
        for (var j = 0; j < choices.length; j++) {
            if (choices[j].checked) {
                userSelections.push(choices[j].id)
                console.log(answerKey);
                console.log(userSelections);
            }
        }
    }
    checkAnswers(userSelections, answerKey);
}

var checkAnswers = function(userSelections, answerKey){
    console.log ('Check is running');
    for (var i = 0; i < answerKey.length; i++){
            if (answerKey[i] === userSelections[i]){
                correctAnswers++;
                
            }
    }
    console.log(correctAnswers);
}
