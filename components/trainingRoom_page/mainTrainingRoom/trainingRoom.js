(function() {
    var player = battle_data.getPlayer();
    DataLoader.loadTutorials("tutorials", player);
    DataLoader.showBtnToTigers(player);

    //dialog effect setting
    $("#dialog").dialog({
        autoOpen: false,
        hide: {
            effect: "explode",
            duration: 1000
        }
    });



    $(document).on("click", "#tutorials li", function() {
        var tutorialId = $(this).data('id');
        var tutorial = training_datas.getData(tutorialId);
        var content = tutorial.content

        //set player state
        player.setTutorialState(tutorialId);

        //refresh page
        DataLoader.loadTutorials("tutorials", player);


        var image = tutorial.imagePath;
        $('#dialog').dialog('option', 'title', tutorial.title);
        $("#dialog").find('p').html(content);
        $('#dialog').find('img').attr('src', image);
        $("#dialog").dialog("open");
    });

    var stateObj = { foo: "bar" };
    function change_my_url()
    {
	    history.pushState(stateObj, "page 2", "battlepage.html");
    }

     $(document).on("click","#EnterBattle",function(){
        var trainQuestions = [];
	change_my_url()
        window.location.href ="battlepage.html";
//        battle_data.setQuestion(); 
     });

})();
