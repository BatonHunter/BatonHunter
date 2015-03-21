'use strict';

var chooseQuestion = (function(){
    var q_view, q_id, q_title, q_content, q_hint, q_anslist, q_anslist_ture;

    var setQuestion = function(question) {
        q_id = question.id;
        q_title = question.title;
        q_content = question.content;
        q_hint = question.hint;
        q_anslist = question.anslist;
        q_anslist_ture = question.ans;
        updateQuestionView();
    }

    var updateQuestionView = function() {
        q_view.find('.questionitem-block .title').text(q_title);
        q_view.find('.questionitem-block .content').text(q_content);
        q_view.find('.questionitem-block .hint').text(q_hint);
        q_view.find('#correctImg').hide();
        q_view.find('#wrongImg').hide();
        q_view.find('#answer .btn').attr("disabled", false);
        var inpuType;
        if (q_anslist_ture.length > 1) {
          inpuType = 'checkbox';
        } else {
          inpuType = 'radio';
        }
        for (var choAns in q_anslist) {
          q_view.find('#answer button').before('<input type="' + inpuType + '" name="answers" id ="r' + (choAns + 1) + '" value="' + (parseInt(choAns) + 1) + '"><label for="r' + (choAns + 1) + '">' + q_anslist[choAns] + '</label></input>');
        }
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
            q_view = dom_id.find("#choicequestion");
            setQuestion(question);
            q_view.find('#answer button').on("click", function() {
                showResult(checkAnswer(q_anslist_ture, $('[name=answers]:checked')));
                setTimeout(function() {
                    QuestionLoader.loadQuestion(dom_id);
                }, 1000);
            });
        }
    }
})(); 
