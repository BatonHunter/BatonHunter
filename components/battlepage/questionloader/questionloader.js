/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var QuestionLoader = (function() {
    var current_question;

    var checkllsAnswer = function(){
        battle_data.getQuestion().removeUsedQustion(current_question);
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

    var checkAnswer = function(ans) {
        battle_data.getQuestion().removeUsedQustion(current_question);
        return (current_question.ans === ans);
    };

    // This function checks the answers by comparing two arrays
    // Return true if two given arrays are identical
    var checkAnswerMutiChoice = function(correct_answers, player_answers) {

        battle_data.getQuestion().removeUsedQustion(current_question);

        // If the length of those two arrays are not identical,
        // they must be different
        if (correct_answers.length !== player_answers.length) {
            return false;
        }

        // Otherwise, let's compare each element in the array
        var check_result = true;

        player_answers.each(function(){

            if (correct_answers.indexOf($(this).val()) === -1) {

                check_result = false;

                // return false will leave the loop each()
                return false;
            }
        });

        return check_result;
    }

    return {
        loadQuestion: function(dom_id) {
            $(dom_id).empty();
            current_question = battle_data.getQuestion().getNextQuestion();
            switch (current_question.type) {
                // case 'tf' stands for 'true/false questions'
                case 'tf':
                    $(dom_id).load("components/battlepage/truefalsequestion/truefalsequestion.html", function() {
                        truefalseQuestion.init(current_question, checkAnswer, $(dom_id));
                    });
                    break;

                case 'linkQuestion':
                    $(dom_id).load("components/battlepage/linklinkseequestion/linklinkseequestion.html", function() {
                        linklinkseeQuestion.init(current_question, checkllsAnswer, $(dom_id));

                    });

                // case 'ch' stands for 'choice questions'
                    break;
                case 'ch':
                    $(dom_id).load("components/battlepage/choicequestion/choicequestion.html", function() {
                        choiceQuestion.init(current_question, checkAnswerMutiChoice, $(dom_id));

                    });
                    break;
                default:
                    break;
            }
        }
    };
})();
