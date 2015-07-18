(function() {
    var player = battle_data.getPlayer();
    DataLoader.loadTutorials("tutorials", player);
    DataLoader.showBtnToTiger(player);

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
        
        //[Cloud_Lin]把玩家點選的的題目的id存入cookie, 之後發出Request時會一併用到
        Cookies.set('question_id', tutorialId, { expires: 7 });
        
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

    $(document).on("click","#EnterBattle",function(){
         //[Cloud_Lin] 把e-mail、職業、QuestionId存成JSON, 送到後端去
        var objToSend = {
            player_email : Cookies.get('player_email'),
            player_job : Cookies.get('player_job'),
            question_id : Cookies.get('question_id')
            };
        ///////////////////////////////////////////////////////////    
        var trainQuestions = [];
	    change_my_url();
        window.location.href ="battlepage.html?train=true";
        battle_data.setQuestion();
    });

})();
