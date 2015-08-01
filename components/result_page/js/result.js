jQuery(function($){
  $(document).ready(function(){

    //  TODO  自cookie獲得經驗值,金錢和是否升級資料
    var isLvUp = Profile.getIsLvUp();
    var money = Profile.getGameMoney();
    var exp = Profile.getGameExp();

    $('#money').text(money);
    $('#exp').text(exp);

    //  TODO  根據是否升級的資料顯示升級的畫面,同時升級畫面中也顯示社群分享按鈕
    if (Boolean(isLvUp)) {
      $('#modal_fight_result').modal();
      new Share('.share-button', { networks: { facebook: { app_id: '' } } });
    }

    //  TODO  將畫面傳導到拉霸機畫面
    $('p.btn').click(function(){
      //  FIXME  加上拉霸機的畫面
      location.href = '/components/battleslot/index.html';
    });

    //  TODO  將分享連結加上title
    $('body').delegate('div.share-button', 'click', function(){
      $(this).find('div.social li').each(function(){
        if ($(this).attr('data-network') == 'google_plus') {
          $(this).attr('title', 'G+');
        } else {
          $(this).attr('title', $(this).attr('data-network'));
        }
      });
    });
  });
});
