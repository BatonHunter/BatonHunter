
var truefalseQuestion = (function(taskComplete) {
    var q_view,
        q_id,
        q_title,
        q_content,
        q_hint;

    var setQuestion = function(question) {
        q_id = question.id;
        q_title = question.title;
        q_content = question.content;
        q_hint = question.hint;

        updateQuestionView();
    }

    var updateQuestionView = function() {
        q_view.find('.questionitem-block .title').text(q_title);
        q_view.find('.questionitem-block .content').text(q_content);
        q_view.find('.questionitem-block .hint').text(q_hint);
        q_view.find('#correctImg').hide();
        q_view.find('#wrongImg').hide();
        q_view.find('#answer .btn').attr("disabled", false);
    }


    var showResult = function(is_correct) {
        q_view.find('#answer .btn').attr("disabled", true);
        if (is_correct) {
            q_view.find('#correctImg').show();
            q_view.find('#wrongImg').hide();
        } else {
            q_view.find('#correctImg').hide();
            q_view.find('#wrongImg').show();
        }
    }


    return {
        init: function(question, checkAnswer, dom_id) {
            q_view = dom_id.find("#truefalsequestion");
            setQuestion(question);
            q_view.find('#answer button').on("click", function() {
				var isCorrect = checkAnswer("tf", $(this).attr("val"));
                showResult(checkAnswer(isCorrect));
            });
        }
    }
})();
