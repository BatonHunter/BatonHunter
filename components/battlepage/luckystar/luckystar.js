var luckystar = (function() {
    var blinkInterval;
    var blinker;

    var startBlink = function(hintTimer) {
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
    };

    var blink = function(time) {
        return setInterval(function() {   
            $(".fancybox-overlay").toggleClass("background-red");
        }, time);
    };

    var clearIntervals = function() {
        clearInterval(blinkInterval);
        clearInterval(blinker);
    };

    return {
        setFancybox: function(dom_id, hintTimer, battleTimer, count_id) {
            if (battle_data.getPlayer().getStar() !== 0) {
                $(count_id).text(' X ' + battle_data.getPlayer().getStar());

                $(dom_id).fancybox({
                    hideOnOverlayClick: false,
                    beforeLoad: function() {
                        startBlink(hintTimer);
                        hintTimer.reset();
                        hintTimer.start();
                        battleTimer.pause();
                    },
                    beforeClose: function() {
                        clearIntervals();
                    },
                    afterClose: function() {
                        battleTimer.start();
                        if (!battle_data.getPlayer().useStar()) {
                            $(dom_id).remove();
                            $(count_id).remove();
                        }
                        $(count_id).text(' X ' + battle_data.getPlayer().getStar());
                    }
                });
            } else {
                $(dom_id).remove();
                $(count_id).remove();
            }
        }
    };
})();