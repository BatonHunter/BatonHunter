//component init
QuestionLoader.loadQuestion('#question');


//global variable declaration
var enemy;
var user;

$(document).ready(function (){
  //count down clock init
  var hintTimer = Object.create(batontimer);
  var battleTimer = Object.create(batontimer);

  battleTimer.setUpClock('#counter', 20, 'red', 'circle', function () {
    alert('You die!');
  });
  hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function () {
    $.fancybox.close();
  });

  battleTimer.reset();
  battleTimer.start();
  //blood obj init

  var countDown,
      blinkInterval,
      blinker,
      $overlay = $('#fancybox-overlay');
      $luckystar = $('#luckystar');

  function startBlink() {
    blinker = blink(1000);
    blinkInterval = setInterval(function () {
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
    return setInterval(function () {
        $overlay.toggleClass("background-red");
    }, time);
  }

  function clearIntervals() {
    clearInterval(countDown);
    clearInterval(blinkInterval);
    clearInterval(blinker);
  }

  //  click lucky star
  $luckystar.fancybox({
    hideOnOverlayClick: false,
    onStart: function() {
      $overlay.removeAttr('style');

      startBlink();

      hintTimer.reset();
      hintTimer.start();

      battleTimer.pause();
    },
    onComplete: function(){
      //  do something before box closed.
      var countValue = $('span.countdown').html();
        countDown = setInterval(function() {
          //console.log(countValue);
        }, 100);
    },
    onCleanup: function(){
      //  do something before box closed.
      clearIntervals();
    },
    onClosed: function(){
      //  do something when box closed.
      battleTimer.start();
    }
  });

  var medicine = [new Herb(1, -100),new Herb(1, 100)];
  user = new Unit(new HP(1000, $('#user-hp')),medicine);
  enemy = new Unit(new HP(1000, $('#enemy-hp')),[]);

  user.onHerbsCountChanged = function(herbCount) {
    $('#herbsCount').text(' X ' + herbCount);
  }
});
