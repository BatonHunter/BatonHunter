
$(document).ready(function(){
	var cardInvisible=Profile.getCardInvisible();
	console.log(cardInvisible);

}
)

rotateCard = function(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
};
