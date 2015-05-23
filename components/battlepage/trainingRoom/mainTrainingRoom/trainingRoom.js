
(function(){
    var player = battle_data.getPlayer();
    DataLoader.loadTutorials("tutorials",player);

    //dialog effect setting
    $( "#dialog" ).dialog({
	autoOpen: false,
	show: {
	    effect: "blind",
	duration: 1000
	},
	hide: {
	    effect: "explode",
	duration: 1000
	}
    });


    $("#tutorials").find("li").on("click",function() {            
	var tutorialId=$(this).data('id');
	var tutorial=training_datas.getData(tutorialId);
	var content=tutorial.content;
	var image = tutorial.imagePath;

	$("#dialog").find('p').html(content);
	$('#dialog').find('img').attr('src',image);
	$("#dialog").dialog( "open" );
    });

})();
