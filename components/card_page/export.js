var expert = (function() {
    var expert_profile = {
    expert_PO : {
        name:  "毅柏",
        title: "PO dada",
        pic: "../../assets/img/baton_logo.png",
        mail: "indieforlife1990@gmail.com",
        fb: "https://www.facebook.com/profile.php?id=100001790232166",
        inrto: "來自接棒啟蒙計畫，立志成為PO大大"
     }
    };
    return {
        getExpert: function(jobID){
            return expert_profile[jobID];
        }
    };
})();

$(document).ready(function() {
  $('#askSubmit').click(function(){
    var content = $('#askContent').val();
    var to = expert.getExpert('expert_PO').mail;
    $.ajax({
      url: ServerConfig.askUrl(),
      method: 'POST',
      crossDomain: true,
      dataType: 'json',
      data: JSON.stringify({content: content, to: to, subject: '職業獵人完成魔王攻略召喚專家'}),
      error: function( response ) {
        console.log(response);
      },
      success: function( responseData, textStatus, jqXHR ) {
        alert('已經成功聯絡專家');
      }
    })
  });
  $('#askClean').click(function(){
    $('#askContent').val('');
  });
});
