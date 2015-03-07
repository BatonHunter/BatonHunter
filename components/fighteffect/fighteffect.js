function fighteffect(type, element)
{
	var options = {};
	$(element).css('background-image', 'url(assets/img/avatar_fight.jpg)');  
	$(element).effect( 'shake', options, 500, callback);
};	

function callback() {
var that = this;
      setTimeout(function() {
        that.removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
};