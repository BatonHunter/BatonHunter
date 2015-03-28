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

    return {
        loadQuestion: function(dom_id) {
            $(dom_id).empty();
            current_question = battle_data.getQuestion().getNextQuestion();
            switch (current_question.type) {
                case 'tf':
                    $(dom_id).load("components/battlepage/truefalsequestion/truefalsequestion.html", function() {
                        truefalseQuestion.init(current_question, checkAnswer, $(dom_id));
                    });
                    break;
                case 'linkQuestion':
                    $(dom_id).load("components/battlepage/linklinkseequestion/linklinkseequestion.html", function() {
                        linklinkseeQuestion.init(current_question, checkllsAnswer, $(dom_id));
                    });
                    break;
                default:
                    break;
            }
        }
    };
})();
