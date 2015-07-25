/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var QuestionLoader = (function() {
    var current_question,
        is_training,
        dom_id;

    var checkAnswer = function (type, ans) {
        console.log("checkAnswer type: "+ type);

        var is_correct = false;
        
        if(type === "lls"){
            is_correct = checkllsAnswer();
        }
        else if (type === "tf"){
            is_correct = checkTrueFalseAnswer(ans);
        }
        else if (type === "choice"){
            is_correct = checkAnswerMutiChoice(ans);
        }

        console.log("is_correct: " + is_correct);

        if(!is_training){
            battle_data.getQuestion().removeUsedQustion(current_question);
            deductHp(is_correct);
            setTimeout(function() {
                loadNextQuestion(dom_id);
                battleTimer.reset();
                battleTimer.start();
            }, 1000);
        }
        else {
            if(is_correct) {     
                window.location.href ="trainingRoom.html";

                // battle_data.getQuestion().removeUsedQustion(current_question);
                // setTimeout(function() {
                //     loadNextQuestion(dom_id);
                // }, 1000);
            }
            else {
                keepAnswering();
            }
        }

        return is_correct;
    }

    var deductHp = function (is_correct){
        if(is_correct){
            battle_effect.beatmonster('#enemy', battle_data.getMonster().getImg_path());
            enemyHP.modifyHP(-200, 1);
        } else{
            userHP.modifyHP(-50, 1);
        }
    };


    var checkllsAnswer = function(){
        var userAnswer = [];
        var trueAnswer = [];

        $('.resultItem').map(function(i) {
            userAnswer.push($(this).attr('data-id'));
        });

        $('.choseItem').map(function(i) {
            trueAnswer.push($(this).attr('data-id'));
        });

        for(var i =0;i<userAnswer.length;i++)
        {
            if(userAnswer[i] !== trueAnswer[i])
                return false;
        }
        return true;
    }

    var checkTrueFalseAnswer = function(ans) {
        return (current_question.ans === ans);
    };

    // This function checks the answers by comparing two arrays
    // Return true if two given arrays are identical
    var checkAnswerMutiChoice = function(player_answers) {

        console.log("checkAnswerMutiChoice: correct ans:"+current_question.ans);
        console.log("checkAnswerMutiChoice: player ans:"+player_answers);
        
        // If the length of those two arrays are not identical,
        // they must be different
        if (current_question.ans.length !== player_answers.length) {
            return false;
        }

        // Otherwise, let's compare each element in the array
        var check_result = true;

        player_answers.each(function(){

            if (current_question.ans.indexOf($(this).val()) === -1) {
                check_result = false;
                // return false will leave the loop each()
                return false;
            }
        });

        return check_result;
    }


    var initQuestion = function (domId, isTraining) {
        is_training = isTraining;
        dom_id = domId;
        loadNextQuestion();
    };

    var loadNextQuestion = function () {
        loadQuestion(battle_data.getQuestion().getNextQuestion());
    }

    var keepAnswering = function () {
        alert("Try Again");
        loadQuestion(current_question);
    }

    var loadQuestion = function(question) {
        current_question = question;
        $(dom_id).empty();
        switch (question.type) {
            // case 'tf' stands for 'true/false questions'
            case 'tf':
                $(dom_id).load("components/battlepage/truefalsequestion/truefalsequestion.html", function() {
                    truefalseQuestion.init(question, checkAnswer, $(dom_id));
                });
                break;
            case 'linkQuestion':
                $(dom_id).load("components/battlepage/linklinkseequestion/linklinkseequestion.html", function() {
                    linklinkseeQuestion.init(question, checkAnswer, $(dom_id));
                });
            // case 'ch' stands for 'choice questions'
                break;
            case 'ch':
                $(dom_id).load("components/battlepage/choicequestion/choicequestion.html", function() {
                    choiceQuestion.init(question, checkAnswer, $(dom_id));
                });
                break;
            default:
                break;
        }
    };

    return {
        loadQuestion:initQuestion
    };
})();
