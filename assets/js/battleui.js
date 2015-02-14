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
  $('#luckystar').fancybox({
    hideOnOverlayClick: false,
    onStart: function(){
       $("#divtoBlink").show();

        setInterval(function(){
         $("#fancybox-overlay").removeAttr("style").toggleClass("backgroundRed");
        },1000);  
    },
    onComplete: function(){
      //  do something before box closed.
    },
    onCleanup: function(){
      //  do something before box closed.
    },
    onClosed: function(){
      //  do something when box closed.
    }
  });
});
