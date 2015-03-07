/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var QuestionLoader = (function () {
  var questionDB =  [{
        id: 1,
        title: "Question 1",
        content: "Is it agile?\n",
        hint:'...',
        ans:true
      },  {
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

  function loadQuestion (dom_id) {
    //TODO: randomly load more different types of questions (instead of just true-false question)
    $(dom_id).load("components/truefalsequestion/truefalsequestion.html", function () {
    	truefalseQuestion.init(getNextQuestion(), checkAnswer, $('#truefalsequestion'));
    });
  }

  var getNextQuestion = function() {
      return questionDB[Math.floor((Math.random() * questionDB.length))];
  }

  function checkAnswer (q_id, ans) {
    var question;

    for (var i = 0; i < questionDB.length; i++) {
      if (questionDB[i].id === q_id) {
        question = questionDB[i];
      }
    }

    setTimeout(function(){
      truefalseQuestion.setQuestion(getNextQuestion());
    },1000);

    if (question === undefined) {
      return undefined;
    } else {
      return (question.ans === ans)
    }
  }

  return {
    loadQuestion: loadQuestion,
    checkAnswer: checkAnswer,
  };
})();
