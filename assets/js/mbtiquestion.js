
// //component init

mbti_questionloader.start('#mbti_container');
$(document).ready(function() {
  var _mbtiButton = $('span.btn');
  _mbtiButton.click(function(){
    _mbtiButton.switchClass('btn-success','btn-default');
    $(this).switchClass('btn-default','btn-success');
  });
});
