function fighteffect(type, element)
{

	var options = {};
	$(element).css('background-image', 'url(assets/img/avatar_fight.jpg)');  
	$(element).effect( 'shake', options, 500, callback(element));
};	

function callback(element) {
var that = $(element);

      setTimeout(function() {
        that.css('background-image', 'url(assets/img/avatar.jpg)');  
      }, 1000 );
};

