/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var mbti_questionloader = (function() {
    var current_question;
    var current_dom_id;
    var score = {};
    var init_score = function(){
        score = {
            I: 0,
            E: 0
            N: 0,
            S: 0,
            T: 0,
            F: 0,
            P: 0,
            J: 0
        };
    };

    var checkAnswer = function(ans) {
        //battle_data.getQuestion().removeUsedQustion(current_question);
        //return (current_question.ans === ans);
    };

    var loadQuestion = function(question_id) {
      current_question = mbti_data.getQuestion(question_id);
	    current_dom_id.find('#mbti_title').text(current_question.title);
      current_dom_id.find('#mbti_content').text(current_question.content); 
	    current_dom_id.find('input').each(function(){
	    });
    };
    var go_next = function(){
        //checkAnswer($(this).attr("val")));
        if (current_question.id < mbti_data.getTotalQuestion()){
            setTimeout(function() {
                current_dom_id.hide();
                setTimeout(function() {
                    loadQuestion(current_question.id + 1);
                    $('[name=mbtians]:checked').attr('checked', false);
                    current_dom_id.show();
                }, 500);
            }, 300);
        }
        else{
            // FINISH TBD
            $('#mbti_container').find('.row').hide();
            $('#myModal').modal();
        }
    };
    return {
        start: function(dom_id){
            current_dom_id = $(dom_id);
            init_score();
            loadQuestion(1);
            current_dom_id.find('#btn_mbti_continue').on("click", function() {
                var scoreTmp = $('[name=mbtians]:checked').val();
                score[current_question.ans_A] += (5 - scoreTmp);
                score[current_question.ans_B] += (parseInt(scoreTmp));
                go_next();
            });
        }
    };
})();
