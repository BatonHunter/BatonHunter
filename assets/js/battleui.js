//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

//global variable declaration
var enemyHP;
var userHP;

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
  enemyHP = new HP(1000, $('#enemy-hp'));
  userHP = new HP(1000, $('#user-hp'));

  var countDown,
      blink,
      $luckystar = $('#luckystar');

  //  click lucky star
  $luckystar.fancybox({
    hideOnOverlayClick: false,
    onStart: function() {
      var $overlay = $('#fancybox-overlay');
      $overlay.removeAttr('style');
      blink = setInterval(function () {
        $overlay.toggleClass("background-red");
        if (hintTimer.currentTimeSecond <= 7) {
          clearInterval(blink);
          blink = setInterval(function () {
            $overlay.toggleClass("background-red");
            if (hintTimer.currentTimeSecond <= 3) {
              clearInterval(blink);
              blink = setInterval(function () {
                $overlay.toggleClass("background-red");
              }, 200);
            }
          }, 500);
        }
      }, 1000);

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
      clearInterval(countDown);
      clearInterval(blink);
    },
    onClosed: function(){
      //  do something when box closed.
      battleTimer.start();
    }
  });
});
