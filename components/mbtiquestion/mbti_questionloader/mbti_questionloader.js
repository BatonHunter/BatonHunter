/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var mbti_questionloader = (function() {
    var current_question;
    var current_dom_id;
    var score = {};
    var IS_TEST_MODE = false;
    var test_idx = 0;
    var init_score = function(){
        score = {
            I: 0,
            E: 0,
            N: 0,
            S: 0,
            T: 0,
            F: 0,
            P: 0,
            J: 0
        };
    };

    var restart = function(){
        init_score();
        if (IS_TEST_MODE) {
            loadQuestion(32);  //set to last question id for demo purpose
        } else {
            loadQuestion(1);
        }
        $('#mbti_container').find('.row').show();
    }

    var checkAnswer = function() {
        var scoreTmp = $('[name=mbtians]:checked').val();
        //console.log(scoreTmp);
        if(scoreTmp == undefined)
        {
            var idx = Math.floor(Math.random() * 10 % 6);
            switch(idx)
            {
                case 0:
                    alert('笨蛋！先選個答案阿！！');
                    break;
                case 1:
                    alert('Choose an answer, Dumbass!!');
                    break;
                case 2:
                    alert('アホ、答えを選択してください！');
                    break;
                case 3:
                    alert('เลือกคำตอบงี่เง่า !!');
                    break;
                case 4:
                    alert('바보, 답변을 선택!');
                    break;
                case 5:
                    alert('Elija una respuesta, idiota !!');
                    break;
            }
            return;
        }
        score[current_question.ans_A] += (5 - scoreTmp);
        score[current_question.ans_B] += (parseInt(scoreTmp));
        $('span.btn-success').switchClass('btn-success','btn-default');
        go_next();
    };

    var finish = function() {
        // get type
        var type = '';
        type += (score.I>score.E)?'I':'E';
        type += (score.N>score.S)?'N':'S';
        type += (score.T>score.F)?'T':'F';
        type += (score.P>score.J)?'P':'J';

        //  TEST
        if(IS_TEST_MODE){
            type = mbti_data.getTypeByIdx(test_idx);
        }

        var result = mbti_data.getCharacter(type);

        Profile.setMBTI(result.character, result.strength, result.category);

        $('#mbti_container').find('.row').hide();
        $('#mbti_result_title').text(result.character+' (' + type + ')');
        $('#mbti_result_type').text(result.style);
        $('#mbti_result_value').text(result.value);
        $('#mbti_result_capability').text(result.capability);
        $('#mbti_result_image').attr('src', result.picture);
        $('#modal_mbti_result').off('hidden.bs.modal');
        $('#modal_mbti_result').on('hidden.bs.modal', function () {
            window.location = PageConfig.personalPage();
        });
        $('#modal_mbti_result').modal();
    };

    var loadQuestion = function(question_id) {
        current_question = mbti_data.getQuestion(question_id);
        current_dom_id.find('#mbti_title').text(current_question.title);
        current_dom_id.find('#mbti_content').text(current_question.content);
        current_dom_id.find('input').each(function(){
        });
    };

    var go_next = function(){
        $('[name=mbtians]:checked').attr('checked', false);
        if (current_question.id < mbti_data.getTotalQuestion()){
            setTimeout(function() {
                current_dom_id.hide();
                setTimeout(function() {
                    loadQuestion(current_question.id + 1);
                    current_dom_id.show();
                }, 300);
            }, 100);
        }
        else{
            finish();
        }
    };


    return {
        start: function(dom_id){
            current_dom_id = $(dom_id);
            current_dom_id.find('#btn_mbti_continue').on("click", function() {
                checkAnswer();
            });
            restart();
        }
    };
})();

$(document).ready(function() {
    $(document).keypress(function(e) {
        var SPACE_KEY = 32;
        var ENTER_KEY = 13;

        if (e.which === SPACE_KEY || e.which === ENTER_KEY) {
            $('#btn_mbti_continue').click();
        }
    });
});
