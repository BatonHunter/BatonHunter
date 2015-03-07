/*
 * QuestionLoader: abstract the question-loading action to include more different question types (true-false, multi-choice, matching... etc.)
 */
var QuestionLoader = (function () {
  function loadQuestion (dom_id) {
    //TODO: randomly load more different types of questions (instead of just true-false question)
    $(dom_id).load("components/truefalsequestion/truefalsequestion.html");
  }

  return {
    loadQuestion: loadQuestion,
  };
})();
