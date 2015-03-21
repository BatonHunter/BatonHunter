'use strict';

var truefalseQuestion = (function() {
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
        deductHp(is_correct);
        battleTimer.reset();
        battleTimer.start();
    }

    var deductHp = function (is_correct){
        if(is_correct){
            battle_effect.beatmonster('#enemy', battle_data.getMonster().getImg_path());
            enemyHP.modifyHP(-50, 1);
        } else{
            userHP.modifyHP(-150, 1);
        }
    };

    return {
        init: function(question, checkAnswer, dom_id) {
            q_view = dom_id.find("#truefalsequestion");
            setQuestion(question);
            q_view.find('#answer button').on("click", function() {
                showResult(checkAnswer($(this).attr("val")));
                setTimeout(function() {
                    QuestionLoader.loadQuestion(dom_id);
                }, 1000);
            });
        }
    }
})();
