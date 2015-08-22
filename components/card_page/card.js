$(document).ready(function(){
	$().ready(function(){
        $('[rel="tooltip"]').tooltip();
        
    });
    
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