$(document).ready(function(){
    //Modal

     $('#myModal').modal('show');
     
    //End Modal field
	var cardInvisible=Profile.getCardInvisible();
	console.log(cardInvisible);
    var bowbow=document.getElementById("bowbow");    //林寶寶div
    if (cardInvisible) {
        console.log("show");
        bowbow.style.visibility='visible';
    }else{
        console.log("non-show");
        bowbow.style.visibility='hidden';
    }
    $('#askContent').css('height', $('.content').height());
});

rotateCard = function(btn){
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
};
