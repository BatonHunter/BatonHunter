//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

//global variable declaration
var enemyHP;
var userHP;

$(document).ready(function (){
  //count down clock init
  batontimer.setUpClock('#counter', 20);
  batontimer.reset();
  batontimer.start();
  //blood obj init
  enemyHP = new HP(1000, $('#enemy-hp'));
  userHP = new HP(1000, $('#user-hp'));
  //  click lucky star
  var countDown;
  $('#luckystar').fancybox({
    hideOnOverlayClick: false,
    onStart: function(){
      //  do something before box closed.
    },
    onComplete: function(){
      //  do something before box closed.
      var countValue = $('span.countdown').html();
        countDown = setInterval(function() {
          console.log(countValue);
        }, 100);
    },
    onCleanup: function(){
      //  do something before box closed.
      clearInterval(countDown);
    },
    onClosed: function(){
      //  do something when box closed.
    }
  });
});
