
// //component init
var userHP;
var enemyHP;
var battleTimer;
var para;
var monsterType;

$(document).ready(function() {

    // URLparameter
    para=getPara.get();

    //If battlepage , the format liked  ?train=1&monster=boss
    //Else , that's train page , so only the  follow string liked ?train=0
    QuestionLoader.loadQuestion('#question',para.train);

    //Page for normal fighting , also need monster value
    if(para.train==0){

        //set HP            
        userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"),para.train);
        enemyHP = new HP(battle_data.getMonster(para.monster).getHp(), $("#enemy-hp"),para.train);

        //fighting page countdown clock
        battleTimer = Object.create(batontimer);
        battleTimer.setUpClock('#counter', 20, 'red', 'circle', function() {
            userHP.modifyHP(-50, 1);
        });
        battleTimer.reset();
        battleTimer.start();

        //luckystar countdown clock
        var hintTimer = Object.create(batontimer);
        hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function() {
            $.fancybox.close();
        });

        luckystar.setFancybox('#luckystar', hintTimer, battleTimer, '#luckyCount');

        $('#herbsCount').text(' X ' + battle_data.getPlayer().getHerbQuantity());
        $('#herb').on("click", {
            dom_id: "#herb",
            value: battle_data.getPlayer().getHerbQuality(),
            type: 1,
            count_id: "#herbsCount"
        }, userHP.heal);
    }



    //Page for training 
    else if(para.train==1){
        //set HP
        userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"),para.train);
        enemyHP = new HP(battle_data.getMonster().getHp(), $("#enemy-hp"),para.train);

        $('.tools').hide();
    }
 
     
});
