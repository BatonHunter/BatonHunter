
    //var user = {};
    var problems =  [{
      id: 1,
      title: "problem 1",
      content: "what is agile?\n",
      answer: true
    },{
      id: 2,
      title: "problem 2",
      content: "what is JQuery?\n",
      answer: false
    }];
    function getProblem(){
      return problems;
    }
    function checkAnswer(problemId, userAns){
      //
      
      return true;
    }
    function gameLogic(result){
      
        
      
    }
    function displayResult(result){
      
      $('#problem, #result').toggle();
      
    }


    $(function(){
      var problems = getProblem();
      var problem = problems.pop();
      $('#problem .title').text(problem.title);
      $('#problem .content').text(problem.content);
      $('#answer button').click(function(){ 
        var result;
        if($(this).attr('id') == 'trueButton'){
          result = checkAnswer(problem.id, true);
        }
        else if($(this).attr('id') == 'falseButton')
          result = checkAnswer(problem.id, false);
        
        gameLogic(result);
        displayResult(result);
      });
    
    });
    