'use strict';

var truefalseQuestion = (function()
{ 
    var q_view,
        q_id, 
        q_title,
        q_content,
        q_hint;
    

    var init = function(question, checkAnswer, view)
    {
      console.log(question);
      q_view = view;
      setQuestion(question);
      q_view.find('#answer button').click(function(){ 
        var result;
        if($(this).attr('id') == 'trueButton'){
          result = checkAnswer(q_id, true);
        }
        else if($(this).attr('id') == 'falseButton')
          result = checkAnswer(q_id, false);
        showResult(result);
      });
      
    } 

    var setQuestion = function(question)
    {
        q_id = question.id;
        q_title = question.title;
        q_content = question.content;
        q_hint = question.hint;  

        updateQuestionView();
    }

    var updateQuestionView = function()
    {
        console.log(q_title);
        q_view.find('.questionitem-block .title').text(q_title);
        q_view.find('.questionitem-block .content').text(q_content);
        q_view.find('.questionitem-block .hint').text(q_hint);

        q_view.find('#correctImg').hide();
        q_view.find('#wrongImg').hide();

        q_view.find('#answer .btn').attr("disabled", false);
    }


    var showResult = function(is_correct)
    {
      q_view.find('#answer .btn').attr("disabled", true);
      if(is_correct)
      {
        q_view.find('#correctImg').show();
        q_view.find('#wrongImg').hide();
      }
      else
      {
        q_view.find('#correctImg').hide();
        q_view.find('#wrongImg').show();
      }
    }

    return {
      init: init,
      setQuestion: setQuestion
    };

})();


/*
    //TESTING
    var testQuestions =  [{
      id: 1,
      title: "Question 1",
      content: "Is it agile?\n",
      hint:'...',
      ans:true
    },{
      id: 2,
      title: "Question 2",
      content: "Is it JQuery?\n",
      hint:'...',
      ans:true
    },{
      id: 3,
      title: "Question 3",
      content: "the answer is true !!Lorem ipsum , consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:true
    },{
      id: 4,
      title: "Question 4",
      content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:false
    },{
      id: 5,
      title: "Question 5",
      content: "the answer is false !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:false
    },{
      id: 6,
      title: "Question 6",
      content: "the answer is true !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:true
    },{
      id: 7,
      title: "Question 7",
      content: "the answer is true !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:true
    },{
      id: 8,
      title: "Question 8",
      content: "the answer is false !!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil!\n",
      hint:'...',
      ans:false
    }];


    
    var runTest = function ()
    {
        truefalseQuestion.init(getNextQuestion(), checkAnswer, $('#truefalsequestion'));
    }

    var getNextQuestion = function()
    {
        var q_idx = Math.floor((Math.random() * testQuestions.length));
        return testQuestions[q_idx];
    }
    
    var checkAnswer = function(q_id, answer)
    {
        //Timer for next question
        setTimeout(function(){
          truefalseQuestion.setQuestion(getNextQuestion());
        },1000);

        return (answer == testQuestions[q_id-1].ans);
    }

*/

    
