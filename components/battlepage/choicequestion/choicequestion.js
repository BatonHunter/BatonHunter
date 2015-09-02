'use strict';

var choiceQuestion = (function(){
    var q_view, q_id, q_title, q_content, q_hint, q_options, q_correct_answers;

    var setQuestion = function(question) {
        q_id = question.id;
        q_title = question.title;
        q_content = question.content;
        q_hint = question.hint;
        q_options = question.answerList;
        q_correct_answers = question.answer;

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
        if (q_correct_answers.length > 1) {
          inpuType = 'checkbox';
        } else {
          inpuType = 'radio';
        }
        var count = 0;
        for (var choAns in q_options) {
          if (count % 2 == 0){
            q_view.find('#answer').append('<div class="row">');
          }
          q_view.find('#answer').append('<input class="answer_but col-xs-2" type="' + inpuType + '" name="answers" id ="r' + (choAns + 1) + '" value="' + (parseInt(choAns) + 1) + '"><label class="answer_label col-xs-4" for="r' + (choAns + 1) + '">' + q_options[choAns] + '</label></input>');
          if (count % 2 == 1){
            q_view.find('#answer').append('</div>');
          }
          
          count++;
        }
        q_view.find('#answer').append('<button class="trueitem flat-butt flat-info-butt flat-info-grad-butt" val="Yes">確認</button>');
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
            q_view = dom_id.find("#choicequestion");
            setQuestion(question);
            q_view.find('#answer button').on("click", function() {
				var isCorrect = checkAnswer("choice", $('[name=answers]:checked'));
                showResult(isCorrect);
            });
        }
    }
})();
