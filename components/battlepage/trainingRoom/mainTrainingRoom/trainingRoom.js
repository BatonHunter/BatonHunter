<<<<<<< HEAD
(function() {
    var player = battle_data.getPlayer();
    DataLoader.loadTutorials("tutorials", player);

    //dialog effect setting
    $("#dialog").dialog({
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
=======

DataLoader.loadData('dialog1');

$(function() {
    $( "#dialog1" ).dialog({
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
 
    $( "#opener" ).click(function() {
      $( "#dialog1" ).dialog( "open" );
    });
  });
>>>>>>> upstream/feature/training-room
