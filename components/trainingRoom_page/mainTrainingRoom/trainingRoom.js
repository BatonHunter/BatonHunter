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
        console.log(player);
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
    //  $("#tutorials").find("li").on("click", function() {
    //     console.log(player);
    //     var tutorialId = $(this).data('id');
    //     var tutorial = training_datas.getData(tutorialId);
    //     var content = tutorial.content

    //     //set player state
    //     player.setTutorialState(tutorialId);

    //     //refresh page
    //     DataLoader.loadTutorials("tutorials", player);



    //     $("#dialog").find('p').html(content);
    //     $("#dialog").dialog("open");
    // });

})();
