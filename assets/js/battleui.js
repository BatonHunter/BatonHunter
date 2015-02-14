//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

//global variable declaration
var enemy;
var user;

$(document).ready(function (){
  //count down clock init
  debugger;
  batontimer.setUpClock('#counter', 20);
  batontimer.reset();
  batontimer.start();
  //blood obj init

  var medicine = [{type:1,healpoint:50}];
  user = new Unit(new HP(1000, $('#user-hp')),medicine);
  enemy = new Unit(new HP(1000, $('#enemy-hp')),[]);
  user.takeMedicine(medicine[0]);
});
