/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var QuestionLoader = (function() {
    var current_question;

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
                case 'ch':
                    $(dom_id).load("components/battlepage/choicequestion/choicequestion.html", function() {
                        chooseQuestion.init(current_question, checkAnswer, $(dom_id));
                    });
                default:
                    break;
            }
        }
    };
})();
