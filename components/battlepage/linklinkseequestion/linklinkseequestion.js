'use strict';

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


$(".resultItem").draggable({
    revert: true,
    helper: "clone"
});

$(".resultItem").droppable({
    accept: ".resultItem",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function(event, ui) {

        var draggable = ui.draggable,
            droppable = $(this),
            dragPos = draggable.position(),
            dropPos = droppable.position();

        draggable.css({
            left: dropPos.left,
            top: dropPos.top
        });

        droppable.css({
            left: dragPos.left + 'px',
            top: dragPos.top - 2 * 'px'
        });
        draggable.swap(droppable);
    }
});

var linklinkSeeQuestion = (function() {
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

        updateQuestionView();
    }

    var updateQuestionView = function() {
        q_view.find('.questionitem-block .title').text(q_title);

        jQuery.each( q_choseItem, function( i, item ) {
            q_view.find('.choseItemFiled .choseItem').text(item.Qtxt).attr('data-id',item.Qid);
        });
        q_view.find('.questionitem-block .hint').text(q_hint);
        // q_view.find('#correctImg').hide();
        // q_view.find('#wrongImg').hide();
        // q_view.find('#answer .btn').attr("disabled", false);
    }

    return {
        init: function(question, checkAnswer, dom_id) {
            q_view = dom_id.find("#linklinkquestion");
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
