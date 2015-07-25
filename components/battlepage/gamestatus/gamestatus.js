//戰鬥狀態管理物件
function GameStatus(){

    //window.alert("hehe!");

    //檢查並切換目前遊狀態
    this.changeBattleStatus = function(hpObj){
        
        //檢查目前遊戲狀態
        var battleStatus = chkStatus(hpObj);

        //當遊戲己結束(win or lose), 將失敗或勝利畫面載入主畫面
        if ((battleStatus === 1) || (battleStatus=== 2))
        {
            loadResultPage(battleStatus, hpObj);
        }
        
    };

    //檢查目前遊戲狀態
    //回傳:
    //1:win
    //2:lose
    //3:遊戲未結束
    var chkStatus = function(hpObj){
     
        if (hpObj.isDead()) {
            if (hpObj.$element.attr('id') === "user-hp") {    
                //this.lose();
                return 2;                
            } else {

                //this.win();
                return 1;
            }
        }
        else
        {
            //3:遊戲未結束
            return 3;
        }
        
    };

    //將結果頁面load回主戰鬥畫面
    //參數:(battleResult)
    //1: win
    //2: lose
    var loadResultPage = function(battleResult, hpObj){

        if (battleResult === 1)
        {
            //$.load(win畫面);
            //$('#mainDiv').load("Win!");
            hpObj.win();
            //$('#mainDiv').html('you win!');
        }
        else
        {
            //$.load(lose畫面);   
            //$('#mainDiv').load("lose!");
            hpObj.lose();
            //$('#mainDiv').html('you lose!');

        }
        
    };
};

