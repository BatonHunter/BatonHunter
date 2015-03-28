// 'use strict';

var linklinkseeQuestion = (function() {

    var draggableInit = function() {


        var test=1;

        jQuery.fn.swap = function(b) {
            // method from: http://blog.pengoworks.com/index.cfm/2008/9/24/A-quick-and-dirty-swap-method-for-jQuery
            b = jQuery(b)[0];
            var a = this[0];
            var t = a.parentNode.insertBefore(document.createTextNode(''), a);
            b.parentNode.insertBefore(a, b);
            t.parentNode.insertBefore(b, t);
            t.parentNode.removeChild(t);
            return this;
        };


        $( ".resultItem" ).draggable({
                    // revert: true,
                    helper: "clone",
                    cursorAt: {
                        top: 5,
                        left: 5
                    }
                });
        $( ".resultItem" ).droppable({
                    accept: ".resultItem",
                    activeClass: "ui-state-hover",
                    hoverClass: "ui-state-active",
                    drop: function(event, ui) {

                        var draggable = ui.draggable,
                            droppable = $( ".resultItem" ),
                            dragPos = draggable.position(),
                            dropPos = droppable.position();

                        draggable.css({
                            left: dropPos.left,
                            top: dropPos.top
                        });

                        droppable.css({
                            left: dragPos.left,
                            top: dragPos.top
                        });
                        draggable.swap(droppable);
                    }
                });

    };

    var q_view,
        q_id,
        q_title,
        q_choseItem,
        q_hint;

    var setQuestion = function(question) {
        q_id = question.id;
        q_title = question.title;
        q_choseItem = question.content;
        q_hint = question.hint;
        q_ans = question.ans;

        updateQuestionView();
    };

    var updateQuestionView = function() {
        q_view.find('.questionitem-block .title').text(q_title);

        q_choseItem = randomArray(q_choseItem);
        q_ans = randomArray(q_ans);

        $('.choseItem').each(function(index) {
            $(this).text(q_choseItem[index].Qtxt).attr('data-id', q_choseItem[index].Qid);
        });
        $('.resultItem').each(function(index) {
            $(this).text(q_ans[index].Atxt).attr('data-id', q_ans[index].Aid);
        });

        q_view.find('.questionitem-block .hint').text(q_hint);
    };

    var randomArray = function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    var showResult = function(is_correct) {
        q_view.find('#answer .btn').attr("disabled", true);
        if (is_correct) {
            alert("Yes");
        } else {
            alert("No");
        }
        deductHp(is_correct);
        battleTimer.reset();
        battleTimer.start();
    };

    var deductHp = function(is_correct) {
        if (is_correct) {
            battle_effect.beatmonster('#enemy', battle_data.getMonster().getImg_path());
            enemyHP.modifyHP(-50, 1);
        } else {
            userHP.modifyHP(-150, 1);
        }
    };

    return {
        init: function(question, checkAnswer, dom_id) {



            q_view = dom_id.find("#linklinkquestion");
            setQuestion(question);
            q_view.find('#llkConfirmBtn').on("click", function() {
                showResult(checkAnswer());
                setTimeout(function() {
                    QuestionLoader.loadQuestion(dom_id);
                }, 1000);
            });

            draggableInit();

        }
    }
})();
