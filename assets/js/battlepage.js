//component init
QuestionLoader.loadQuestion('#question');

//global variable declaration
var enemy;
var user;

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
    luckystar.setFancybox('#luckystar', hintTimer, battleTimer);




    var medicine = [new Herb(1, -100), new Herb(1, 100)];
    user = new Unit(new HP(1000, $('#user-hp')), medicine);
    enemy = new Unit(new HP(1000, $('#enemy-hp')), []);

    user.onHerbsCountChanged = function(herbCount) {
        $('#herbsCount').text(' X ' + herbCount);
    }
});