jQuery(function($){
  $(document).ready(function(){
    var isWin = true;
    var isLvUp = true;
    var money = 1000;
    var exp = 350;
    //  TODO  自cookie獲得經驗值,金錢和是否升級資料
    $("#money").text(money);
    $("#exp").text(exp);
    //  DONE  根據是否升級的資料顯示升級的畫面,同時升級畫面中也顯示社群分享按鈕
    if (isLvUp) {
    $('#modal_fight_result').modal();
        new Share(".share-button", {
          networks: {
            facebook: {
              app_id: ""
            }
          }
        });
    }

    //  TODO  將畫面傳導到拉霸機畫面
    $('p.btn').click(function(){
      //  FIXME  加上拉霸機的畫面
      location.href = '';
    });
  });
});
