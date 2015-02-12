//global variable declaration
var countdown;
var enemyHP;
var userHP;

//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

$(document).ready(function (){
  //blood obj init
  enemyHP = new HP(1000, $('#enemy-hp'));
  userHP = new HP(1000, $('#user-hp'));

  countdown = new CountDown('#counter', 20, 10, 20, function () {
    startCount();
  }); //id radius time callback
  startCount();
});

function startCount() {
  countdown.reset();
  setTimeout(function () {
    countdown.startCountdown();
  }, 0);
}