//component init
QuestionLoader.loadQuestion('#question');


//global variable declaration
var enemy;
var user;

$(document).ready(function() {
    //count down clock init
    var battleTimer = Object.create(batontimer);

    battleTimer.setUpClock('#counter', 20, 'red', 'circle', function() {
        alert('You die!');
    });
    battleTimer.reset();
    battleTimer.start();

    var blinkInterval,
        blinker;

    function startBlink() {
        blinker = blink(1000);
        blinkInterval = setInterval(function() {
            if (hintTimer.currentTimeSecond === 7) {
                clearInterval(blinker);
                blinker = blink(500);
            } else if (hintTimer.currentTimeSecond === 3) {
                clearInterval(blinker);
                blinker = blink(200);
            }
        }, 1000);
    }

    function blink(time) {
        return setInterval(function() {   
            $(".fancybox-overlay").toggleClass("background-red");
        }, time);
    }

    function clearIntervals() {
        clearInterval(blinkInterval);
        clearInterval(blinker);
    }

    var medicine = [new Herb(1, -100), new Herb(1, 100)];
    user = new Unit(new HP(1000, $('#user-hp')), medicine);
    enemy = new Unit(new HP(1000, $('#enemy-hp')), []);

    user.onHerbsCountChanged = function(herbCount) {
        $('#herbsCount').text(' X ' + herbCount);
    }




    //lucky star
    var hintTimer = Object.create(batontimer);
    hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function() {
        $.fancybox.close();
    });

    var $luckystar = $('#luckystar');
    $luckystar.fancybox({
        hideOnOverlayClick: false,
        beforeLoad: function() {
            startBlink();

            hintTimer.reset();
            hintTimer.start();

            battleTimer.pause();
        },
        afterLoad: function() {
            var countValue = $('span.countdown').html();
        },
        beforeClose: function() {
            clearIntervals();
        },
        afterClose: function() {
            battleTimer.start();
        }
    });

});