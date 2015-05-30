
// //component init

mbti_questionloader.start('#mbti_container');
$(document).ready(function() {
  $('#mbti_description p span').click(function(){
      $('#modal_mbti_readmore').on('hidden.bs.modal');
      $('#modal_mbti_readmore').modal();
  });
  var _mbtiButton = $('span.btn');
  _mbtiButton.click(function(){
    _mbtiButton.switchClass('btn-success','btn-default');
    $(this).switchClass('btn-default','btn-success');
  });
});
