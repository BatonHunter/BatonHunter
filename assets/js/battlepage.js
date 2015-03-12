//component init
QuestionLoader.loadQuestion('#question');

//global variable declaration
var enemyHP;
var userHP;

$(document).ready(function() {
    //fighting page countdown clock
    var battleTimer = Object.create(batontimer);
    battleTimer.setUpClock('#counter', 20, 'red', 'circle', function() {
        //TODO: times up
    });
    battleTimer.reset();
    battleTimer.start();

    //luckystar coountdown clock
    var hintTimer = Object.create(batontimer);
    hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function() {
        $.fancybox.close();
    });
    luckystar.setFancybox('#luckystar', hintTimer, battleTimer, '#luckyCount');

    userHP = new HP(battle_data.player.hp, $("#user-hp"));
    enemyHP = new HP(battle_data.monster.hp, $("#enemy-hp"));

    $('#herbsCount').text(' X ' + battle_data.player.herb.quantity);
    $('#herb').on("click", {
        dom_id: "#herb",
        value: battle_data.player.herb.quality,
        type: 1,
        count_id: "#herbsCount"
    }, userHP.heal);
});