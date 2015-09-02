/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 *
 * taskComplete => battlepage/dao/taskStatusDao.js
 */
var QuestionLoader = (function() {
    var current_question;
    var isTraining = true;
    var dom_id;
    var param;

    var checkAnswer = function (type, ans) {

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

        if(!isTraining){
            loadQuestion(battle_data.getQuestion().getNextQuestion(param));
            deductHp(is_correct);
            setTimeout(function () {
                battleTimer.reset();
                battleTimer.start();
            }, 1000);
        }
        else {
            if(is_correct) {
                enemyHP.modifyHP(-99, 1);
				taskComplete.send().done(function(){
               		window.location.href ="trainingRoom.html";
				});				 
            }
            else {
                loadQuestion(battle_data.getQuestion().getNextQuestion(param));
                userHP.modifyHP(-20, 1);
                if(userHP.isDead()){
                    window.location.href ="trainingRoom.html";
                }
            }
        }

        return is_correct;
    }

    var deductHp = function (is_correct){
        if(is_correct){
            beatmonster('#enemy', battle_data.getMonster().getImg_path());
            enemyHP.modifyHP(-25, 1);
        } else{
            userHP.modifyHP(-20, 1);
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
        return (current_question.answer === ans);
    };

    // This function checks the answers by comparing two arrays
    // Return true if two given arrays are identical
    var checkAnswerMutiChoice = function(player_answers) {
        // If the length of those two arrays are not identical,
        // they must be different
        if (current_question.answer.length !== player_answers.length) {
            return false;
        }

        // Otherwise, let's compare each element in the array
        var check_result = true;

        player_answers.each(function(){

            if (current_question.answer.indexOf($(this).val()) === -1) {
                check_result = false;
                // return false will leave the loop each()
                return false;
            }
        });

        return check_result;
    }


    var initQuestion = function (domId,obj) {
        dom_id = domId;
        param = obj;
       	loadQuestion(battle_data.getQuestion().getNextQuestion(param));
        if(param.taskId === undefined || param.taskId === ""){
           isTraining = false;
        }
    };

    var keepAnswering = function () {
        loadQuestion(current_question);
    }
    //there is a parameter need to select wheater traing question or battle question.
    //var loadQuestion = function(question)
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
