// //component init
var userHP;
var enemyHP;
var battleTimer;
var para;
var monsterType;

$(document).ready(function() {

    // URLparameter
    para = getPara.get();

    userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"), para.monster, $("#user-hp").width());
    enemyHP = new HP(battle_data.getMonster(para.monster).getHp(), $("#enemy-hp"), para.monster ,$("#enemy-hp").width());

    if (para.taskId === undefined) {


        var param = {
            jobId : para.jobId
		}
        //fighting page countdown clock
        battleTimer = Object.create(batontimer);
        battleTimer.setUpClock('#counter', 26, 'red', 'circle', function() {
            userHP.modifyHP(-20, 1);
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
    else {
        var param = {
            jobId : para.jobId,
            taskId : para.taskId
        };

        $('.tools').hide();
    }
    QuestionLoader.loadQuestion('#question', param);
  
});
