
// //component init
var userHP;
var enemyHP;
var battleTimer;

$(document).ready(function() {

    // type: 0 real battle, 1 training battle 
    var isTraining = getUrlParameters("train", "", true);
    console.log("isTraining: " + isTraining);

    QuestionLoader.loadQuestion('#question', isTraining);

    userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"));
    enemyHP = new HP(battle_data.getMonster().getHp(), $("#enemy-hp"));

    if(!isTraining){
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
    else{
        $('.tools').hide();
    }
 
     
});


function getUrlParameters(parameter, staticURL, decode){
   var currLocation = (staticURL.length)? staticURL : window.location.search,
       parArr = currLocation.split("?")[1];

    if(parArr)
        parArr = parArr.split("&");
    else 
        return;

   for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
        }else{
            return null;  
        }
   }
   return null;
}

